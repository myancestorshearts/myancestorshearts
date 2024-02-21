import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-primary-600 text-white py-14'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='text-center lg:text-left mb-4 lg:mb-0'>
                    <span>MyAncestorsHeart ©2023</span>
                </div>
                <div className='flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0'>
                    <div className='flex justify-center lg:justify-start space-x-4'>
                        <a href='/careers' className='block '>Careers</a>
                        <a href='/ambassador' className='block '>Become an Ambassador</a>
                    </div>
                    <div className='flex justify-center mx-7 space-x-6'>
                        <a href='/privacy' className='block '>Privacy</a>
                        <a href='/user-agreement' className='block '>User Agreement</a>
                        <a href='/cookie-policy' className='block '>Cookie Policy</a>
                        <a href='/community-guidelines' className='block '>Community Guidelines</a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

