'use client'

import axios from 'axios'
import React from 'react'

const CreateBlogForm = () => {


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        const data = {
          title: formData.get('title') as string,
          content: formData.get('content') as string,
          category: formData.get('category') as string,
          featureImage: formData.get('featureImage') as string,
          images: formData.getAll('images') as string[]
        }

        const response = await axios.post('/api/blog/create-blog', formData)


        console.log(response)
    }
  return (
    <div className='flex flex-col'>
        <form onSubmit={handleSubmit} className='flex flex-col'  >
        <input type="text" placeholder="Title" name='title' className='bg-red' />
        <input type="text" placeholder="content" title='content' name='content' /> 
        <input type="text" placeholder="category" name='category' />
        <input type='file' placeholder='featured image' name='featureImage' />
        <input type='file' placeholder='more images' name='images' multiple />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreateBlogForm