import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="mb-5 text-5xl tracking-tight sm:text-6xl text-pretty">About <span className='font-bold'>Seeking You <span className='text-rose-600'>2</span></span></h1>
            <p className='text-lg'><span className='font-bold'>Seeking You <span className='text-rose-600'>2</span></span> is an innovative company dedicated to connecting people and ideas in meaningful ways. Their brand new office, located in the heart of Newcastle, reflects their forward-thinking spirit with its modern design and welcoming atmosphere. The space is filled with natural light and state-of-the-art amenities, making it an inspiring environment for creativity and collaboration.</p>
            <Image className='mt-5 rounded-3xl' src='/HQ.png' alt='The Head Quarters of Seeking You 2' width='1000' height='500' />
        </div>
    )
}