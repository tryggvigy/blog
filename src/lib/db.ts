import { MongoClient, Db } from 'mongodb'
import type { PostMetadata } from './types'

const uri = process.env.MONGODB_URI
if (!uri) {
  console.warn('MONGODB_URI environment variable not set. MongoDB features will be disabled.')
}

const client = uri ? new MongoClient(uri) : null
let db: Db

export async function connectToDatabase() {
  if (!uri || !client) {
    throw new Error('MongoDB not configured')
  }
  if (!db) {
    await client.connect()
    db = client.db('techblog')
  }
  return db
}

export async function incrementViews(slug: string): Promise<void> {
  try {
    const database = await connectToDatabase()
    const collection = database.collection<PostMetadata>('post_metadata')
    
    await collection.updateOne(
      { slug },
      { 
        $inc: { views: 1 },
        $set: { lastViewed: new Date() }
      },
      { upsert: true }
    )
  } catch (error) {
    console.warn('Failed to increment views:', error)
  }
}

export async function getPostViews(slug: string): Promise<number> {
  try {
    const database = await connectToDatabase()
    const collection = database.collection<PostMetadata>('post_metadata')
    
    const metadata = await collection.findOne({ slug })
    return metadata?.views || 0
  } catch {
    return 0
  }
}

export async function searchPosts(query: string): Promise<string[]> {
  try {
    const database = await connectToDatabase()
    const collection = database.collection<PostMetadata>('post_metadata')
    
    const results = await collection
      .find({ 
        searchTerms: { $regex: query, $options: 'i' } 
      })
      .project({ slug: 1 })
      .toArray()
    
    return results.map(r => r.slug)
  } catch {
    return []
  }
}