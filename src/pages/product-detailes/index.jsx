import React, { memo, useEffect } from 'react'
import ProductsWrapper from '../../components/product-wrapper'
import { COMMENTS, PRODUCTS } from '../../static'
import SuccessIcon from '../../assets/icons/SuccessIcon'
import { ratingTotal } from '../../static/CustemsFuction'
import { useNavigate } from 'react-router-dom'

const ProductDetailes = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='max-w-[1240px] w-full mx-auto'>
            <ul className='w-full flex flex-col gap-3'>
                <h4>All Reviews</h4>
            </ul>
            <div className="w-full mt-6 flex flex-wrap gap-5">
                {COMMENTS?.slice(0, 6)?.map(comment => (
                    <ul className='w-[610px] h-[250px] p-8 flex flex-col gap-3 shadow-md border-[1px] rounded-[20px]'>
                        <li>{ratingTotal(comment?.rating)} </li>
                        <li className='flex items-center text-[20px] font-bold gap-1'>
                            {`${comment?.fname} ${comment?.lname}.`} <SuccessIcon />
                        </li>
                        <li className='max-w-[522px] w-full text-[15.5px] text-[#00000099]'>
                            {comment?.text}
                        </li>
                    </ul>
                ))}
            </div>
            <button className={`w-64 mt-9 px-11 py-4 mx-auto text-md font-semibold rounded-[30px] border-[1px]`}
                onClick={() => navigate('/products')} >
                Load More Reviews
            </button>
            <ProductsWrapper title={'You might also like'} star={8} end={12} products={PRODUCTS} />
        </div>
    )
}

export default memo(ProductDetailes)