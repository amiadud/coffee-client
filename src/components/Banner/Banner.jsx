import banner from '../../assets/images/more/6.jpeg'
import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'
const Banner = () => {
    return (
        <>
            <div className='hero'>
                <img src={banner} alt="" />
            <div className='hero-content flex-col flex-end w-4/6'>
            <h2 className='text-white text-5xl'>Would you like a Cup of Delicious Coffee?</h2>
            <p className='text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='bg-yellow-300 py-2 px-4 rounded'>Learn more</button>
            </div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-6 '>
                <div className='text-left'>
                <div className='flex justify-start'>
                <img src={icon1} alt="" />
                </div>
                <h2 className='text-4xl'>Awesome Aroma</h2>
                <p className='text-lg'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='text-left'>
                <div className='flex justify-start'>
                <img src={icon2} alt="" />
                </div>
                <h2 className='text-4xl'>Awesome Aroma</h2>
                <p className='text-lg'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='text-left'>
                <div className='flex justify-start'>
                <img src={icon3} alt="" />
                </div>
                <h2 className='text-4xl'>Awesome Aroma</h2>
                <p className='text-lg'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='text-left'>
                <div className='flex justify-start'>
                <img src={icon4} alt="" />
                </div>
                <h2 className='text-4xl'>Awesome Aroma</h2>
                <p className='text-lg'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
            </div>
        </>
    );
};

export default Banner;