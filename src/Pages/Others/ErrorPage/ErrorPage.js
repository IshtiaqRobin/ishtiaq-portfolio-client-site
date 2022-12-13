import React from 'react';
import { Link } from 'react-router-dom';
import error_img from '../../../assets/error.png';

const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center p-8 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <figure><img className='w-96 h-96' src={error_img} alt="" /></figure>
                    <div className='max-w-md text-center'>
                        <p className='text-2xl font-semibold md:text-3xl mb-8'>
                            Sorry, we couldn't find this page.
                        </p>
                        <Link
                            to='/'
                            className="btn btn-accent text-black bg-[]"
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;