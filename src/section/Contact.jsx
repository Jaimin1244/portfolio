import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = (props) => {
    return (
        <section {...props} id='contact' className='max-w-5xl mx-auto px-4 space-y-6'>
            <h1 className='text-4xl font-bold text-center'>Hire Me</h1>

            <div className='grid md:grid-cols-2 gap-8 items-center'>

                <div className='flex justify-center'>
                    <img src="/hire-me.png" alt="Hire Me" className='w-full max-w-md h-auto' />
                </div>  

                <div className="p-6 rounded-box border border-base-300 shadow-md space-y-4 w-full max-w-xs mx-auto">
                    <a href="https://github.com/Jaimin1244" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 hover:underline'>
                        <Github className="w-6 h-6" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 hover:underline'>
                        <Linkedin className="w-6 h-6" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto:jjpatel1890@gmail.com" className='flex items-center space-x-2 hover:underline'>
                        <Mail className="w-6 h-6" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact