import React from 'react'
import CommentSection from './CommentSection.jsx'
import { textContent } from '../data.jsx'
import Divider from './elements/Divider.jsx'
import PostCommentBox from './elements/PostCommentBox.jsx'
import FeedsCard from './elements/FeedsCard.jsx'

function NewPostsContainer() {
    return (
        <div>
            <div className="head mt-[79px]">
                <img src="/assets/divider-2.png" alt="" className="w-full max-w-[189px] h-full object-cover" />
            </div>
            <p className='text-[28px] sm:text-[36px] md:text-[48px] font-[Poppins] font-[700]'>
                {textContent.newPosts.heading}
            </p>
            <div className="posts p-[34px] flex flex-col items-center justify-center rounded-[20px] shadow-lg mt-[30px]">
                <div className="post-container flex flex-row justify-between">
                    <div className="left max-w-[561px] w-full">
                        <div className="profile flex flex-row gap-[23px] items-start">
                            <div className="pfp">
                                <img src="/assets/JhonCena.png" alt="Profile" className='w-[55px] h-[55px] rounded-full' />
                            </div>
                            <div className="user-info">
                                <p className='text-[24px] font-[Poppins] font-[700] text-black'>
                                    {textContent.newPosts.profile.name}
                                </p>
                                <p className='text-[18px] font-[Poppins] font-[400] text-[#666666]'>
                                    {textContent.newPosts.profile.eventName}
                                </p>

                            </div>
                        </div>
                        <div className="content mt-[45px]">
                            <div className="title">
                                <p className='text-[24px] font-[Poppins] font-[600] text-black'>
                                    {textContent.newPosts.post.title}
                                </p>
                                <p className='flex flex-row gap-[8px] items-center mt-2'>
                                    <span className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.6">
                                                <path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="black" />
                                                <path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="black" />
                                            </g>
                                        </svg>

                                    </span>
                                    <span className='text-[14px] font-[Poppins] font-[400] text-[#666666]'>
                                        {textContent.newPosts.post.date}
                                    </span>
                                </p>
                            </div>
                            <div className="description mt-[21px]">
                                <p className='text-[16px] font-[Poppins] font-[400] text-[#666666]'>
                                    {textContent.newPosts.post.description1}
                                </p>
                                <p className='text-[16px] font-[Poppins] font-[400] text-[#666666] mt-[13px]'>
                                    {textContent.newPosts.post.description2}
                                </p>
                            </div>
                        </div>
                        <div className="stats flex flex-row gap-4 mt-4">
                            <div className="likes flex flex-row items-center gap-2">
                                <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 4C4.4625 4 2 6.4625 2 9.5C2 15 8.5 20 12 21.163C15.5 20 22 15 22 9.5C22 6.4625 19.5375 4 16.5 4C14.64 4 12.995 4.9235 12 6.337C11.4928 5.6146 10.8191 5.02505 10.0358 4.61824C9.25245 4.21144 8.38265 3.99938 7.5 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <span className="text-[14px] font-[Poppins] font-[400] text-[#666666]">
                                    {textContent.newPosts.post.likes}
                                </span>
                            </div>
                            <div className="comments flex flex-row items-center gap-2">
                                <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_34717_1989)">
                                            <path d="M6.75018 9.75C5.92049 9.75 5.25018 10.4203 5.25018 11.25C5.25018 12.0797 5.92049 12.75 6.75018 12.75C7.57987 12.75 8.25018 12.0797 8.25018 11.25C8.25018 10.4203 7.57987 9.75 6.75018 9.75ZM12.0002 9.75C11.1705 9.75 10.5002 10.4203 10.5002 11.25C10.5002 12.0797 11.1705 12.75 12.0002 12.75C12.8299 12.75 13.5002 12.0797 13.5002 11.25C13.5002 10.4203 12.8299 9.75 12.0002 9.75ZM17.2502 9.75C16.4205 9.75 15.7502 10.4203 15.7502 11.25C15.7502 12.0797 16.4205 12.75 17.2502 12.75C18.0799 12.75 18.7502 12.0797 18.7502 11.25C18.7502 10.4203 18.0799 9.75 17.2502 9.75ZM12.0002 1.5C5.37206 1.5 0.000181322 5.86406 0.000181322 11.25C0.000181322 13.4812 0.932994 15.525 2.47987 17.1703C1.78143 19.0172 0.328306 20.5828 0.304869 20.6016C-0.00450618 20.9297 -0.0888812 21.4078 0.0892438 21.8203C0.267369 22.2328 0.675181 22.5 1.12518 22.5C4.00799 22.5 6.28143 21.2953 7.64549 20.3297C9.00018 20.7563 10.4627 21 12.0002 21C18.6283 21 24.0002 16.6359 24.0002 11.25C24.0002 5.86406 18.6283 1.5 12.0002 1.5ZM12.0002 18.75C10.7486 18.75 9.51112 18.5578 8.32518 18.1828L7.26112 17.8453L6.34706 18.4922C5.67674 18.9656 4.75799 19.4953 3.65174 19.8516C3.99393 19.2844 4.32674 18.6469 4.58456 17.9672L5.08143 16.65L4.11581 15.6281C3.26737 14.7234 2.25018 13.2281 2.25018 11.25C2.25018 7.11563 6.62362 3.75 12.0002 3.75C17.3767 3.75 21.7502 7.11563 21.7502 11.25C21.7502 15.3844 17.3767 18.75 12.0002 18.75Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_34717_1989">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <span className="text-[14px] font-[Poppins] font-[400] text-[#666666]">
                                    {textContent.newPosts.post.comments}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="events flex flex-row gap-[10px] items-start justify-center flex-wrap">
                            <img src="/assets/Post/1.png" alt="" className='w-full max-w-[302px] h-full object-cover' />
                            <img src="/assets/Post/2.png" alt="" className='w-full max-w-[302px] h-full object-cover' />
                            <img src="/assets/Post/3.png" alt="" className='w-full max-w-[302px] h-full object-cover' />
                            <img src="/assets/Post/4.png" alt="" className='w-full max-w-[302px] h-full object-cover' />
                        </div>
                    </div>
                </div>


                <Divider />
                <PostCommentBox />
                <CommentSection />
            </div>
            <FeedsCard />
            <FeedsCard />
            <FeedsCard />
            <FeedsCard />
            <FeedsCard />
        </div>
    )
}

export default NewPostsContainer