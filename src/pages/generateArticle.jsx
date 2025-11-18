import { Edit, Sparkles } from 'lucide-react'
import React from 'react'
import axios from 'axios'

import toast, { Toaster } from 'react-hot-toast';

const VITE_API_BASE_URL = import.meta.env.VITE_API_URL
console.log("VITE_API_BASE_URL:", VITE_API_BASE_URL);

const generateArticle = () => {

  const [loading, setLoading] = React.useState("");
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);


  const[article, setArticle] = React.useState({
    topic: '', length: 500, content:''
  });
  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to generate article based on the content
    //console.log('Article generated:', article);
    //console.log('Generating article with topic:', article.topic, 'and length:', article.length);

    try {
      setLoading(true);
      const response = await axios.post(`${VITE_API_BASE_URL}/ai/v1/generate-text`, {
        text: article.topic
        /*length: article.length*/
      });
    console.log("status", response.status);
    /*console.log('Generated Article:', response.data.response);*/
      if (response.data.response && response.status === 200)
      {
        setArticle({
          ...article,
          content: response.data.response
        });
      setSuccess(true);
      } 
      else {
      setError('Failed to generate article. Please try again.');
      toast.error('Failed to generate article. Please try again.');
      setSuccess(false);
    }
  } catch (error) {
    console.error('Error generating article:', error);
    setError('Failed to generate article. Please try again.');
    toast.error('Failed to generate article. Please try again.');
  } 
  finally {
    setLoading(false);
  }
};
  return (
    <div className='flex flex-items-start flex-wrap p-4 w-full bg-gray-100'>
      <Toaster position="top-center" reverseOrder={false} />

      {/*--left component--*/ }

        <form onSubmit={handleSubmit} className='w-full max-w-lg h-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white'>
          <div className='flex flex-items gap-4 mb-4 '>
            <Sparkles className='w-8 h-8 text-blue-400 mb-4' />
            <h2 className='text-xl font-semibold'>Generate Article</h2>
            </div>
            <div>
            <p className='text-gray-500 mb-4'>Fill in the details below to generate your article.</p>
      
         
          <div className='mb-4 text-gray-600'>
            <label className='block text-gray-700'>Article Topic</label>
            <textarea className='w-full p-2 border rounded' required rows='5' onChange={handleChange} name='topic' placeholder='Write your article content here'></textarea>
          </div>
          <div className='mb-4 text-gray-600'>
            <label className='block text-gray-700'>Article Length</label>
            <input type='number' className='w-full p-2 border rounded' required onChange={handleChange} name='length' placeholder='Enter desired article length in words' />
          </div>
         
          <br/>
            <button disabled={loading} type='submit' className='w-full flex items-center justify-center px-4 py-2 text-white bg-blue-500 gap-2  rounded cursor-pointer items-center flex justify-center'>
              {loading ? 
            /*<span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animated-spin'></span>*/
            <span className="w-4 h-4 my-1 rounded-full border-2 border-white border-t-transparent animate-spin"></span>

          : 
           
           <Edit className='w-5 h-5 text-white mr-2' />
          }
          Generate Article</button>
            
          
        </div>
      </form>

      {/*--right component--*/ }
      <div className='flex-1 p-4 border rounded-lg border-gray-300 shadow-md bg-white ml-4 overflow-y-auto justity-items items-center'>
        <h2 className='text-xl font-semibold mb-4'>Generated Article Preview</h2>

          


        {!article.content ? (
 <div className='p-2  rounded text-slate-500'>
  
          <p className='mt-2'>This is a preview of the generated article content. It will be displayed here after generation.</p>


        </div>        ) : (
          <div className='mb-4'>
            <h3 className='text-lg font-semibold'>Article Topic: {article.topic}</h3>
            <p className='text-gray-700 mt-2'>{article.content}</p>
          </div>
        )}
      </div>

      {/*--footer component--*/ }
      <div className='w-full p-4 border-t mt-4 bg-gray-50'>
        <p className='text-center text-gray-600'>© 2025TechAI. All rights reserved.</p>
      </div>

      {/*--empty div for spacing--*/ }
<div>

</div>
      </div>
    
  )
}

export default generateArticle