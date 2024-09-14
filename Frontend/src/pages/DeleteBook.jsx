import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { URL } from '../constants/config'
import { useSnackbar } from 'notistack'

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`${URL}/books/${id}`)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Book Deleted Successfully', { variant: 'success' })
        navigate('/')

      })
      .catch((error) => {
        setLoading(false)
        // alert('An error happened.')
        enqueueSnackbar('Error', { variant: 'error' })
        console.log(error)
      });
  }
  return (
    <div className='flex flex-col justify-between gap-4'>
      <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>Delete Book</h1>
        {loading ? <Spinner /> : ' '}
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
          <h3 className='text-2xl'>Are You Sure, Want to delete this book ?</h3>
          <button
            className='p-4 bg-red-600 text-white m-8 w-full'
            onClick={handleDeleteBook}>
            Yes, Delete it!
          </button>

        </div>

      </div>
      <div className='self-center pb-2'>
        <h3>Developed with ♥ by PRiTiSh</h3>
      </div>
    </div>
  )
}

export default DeleteBook