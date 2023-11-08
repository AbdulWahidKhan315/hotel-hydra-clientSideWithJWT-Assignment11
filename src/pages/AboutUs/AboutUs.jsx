import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default () => (
    <div className='container mx-auto'>
        <Tabs>
            <TabList>
                <Tab>About Us</Tab>
                <Tab>Contact Us</Tab>
            </TabList>

            <TabPanel>
                <div className='my-4'>
                    <div className="card bg-[#272727] text-white">
                        <div className="card-body">
                            <div className='flex items-center gap-10'>
                                <h2 className="text-4xl">A Nice <span className='text-[#D9A05A]'>Background Story</span> of <span className='text-[#D9A05A]'>Hotel Hydra</span></h2>
                                <div className="h-8 w-8 rounded-2xl bg-gradient-to-r from-gray-950 to-gray-600 animate-spin flex justify-center items-center">
                                    <h1 className='h-8 w-8 rounded-full bg-pink-600 animate-ping'></h1>
                                </div>
                            </div>
                            <p className='my-4 text-lg text-[#bdbdbd]'>Iftekhar Alam, AKA, Allen Alam, has been living in the United States of America for last 27 years. He bought this land back in 2003, without knowing what he wants to do with the land. Maybe he was thinking to spend his retired life here in Cox’s Bazaar.</p>
                            <p className='text-lg text-[#bdbdbd]'>About 7 years ago he was planning to do something with the land, but couldn't because of all the issues that came up when he decided to make the fence and strengthen the security of the land.</p>

                            <p className='text-lg my-4 text-[#bdbdbd]'>Then again in June 2012, he came with his family to visit the land and decided that he must do something with the land, so that the local area young people would get job. He could build a tall multi story building to earn a lot of money, but instead he decided to save the world, to save the environment, he had decided to build a facility that would not harm the environment.</p>

                            <p className='text-lg text-[#bdbdbd]'>We have tried our best to build the resort as natural as we can do. We have tried to use more natural material to build the floor and other. Instead of using Steel, we tried to use Bamboo sticks.</p>

                        </div>
                        <div>
                            <h1 className='text-4xl text-center font-bold'>Amenities</h1>
                            <div className='bg-black flex flex-col lg:flex-row justify-evenly py-10'>
                                <h1 className='text-xl'>* High Speed Wifi</h1>
                                <h1 className='text-xl'>* Hot And Cold Water</h1>
                                <h1 className='text-xl'>* Air Conditonar</h1>
                                <h1 className='text-xl'>* Led TV</h1>
                                <h1 className='text-xl'>* Fridge</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            
            <TabPanel>
                <div className='container mx-auto'>
                    <h1 className='text-4xl font-bold text-gray-600'>Contact Us</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                        <div>
                            <div className='space-y-2'>
                                <h1 className='text-4xl font-bold text-gray-600'>Dhaka Office</h1>
                                <p>Suvastu Madhobilota, Flat # 5B, House # 67, Road # 17, Bloack # C, Banani, Dhaka - 1213</p>
                                <p> +88 02 55035731-32</p>
                                <p> +88017 555 98 446-47, 88 01844 114 822</p>
                                <p> salesdhk@hotelthecoxtoday.com</p>
                            </div>
                        </div>
                        <div>
                            <div className='space-y-2'>
                                <h1 className='text-4xl font-bold text-gray-600'>Cox's Bazar Office</h1>
                                <p> Plot-7, Road-02, Hotel Motel Zone, Kolatoly Road, Cox's Bazar, Bangladesh</p>
                                <p> +88 02 55035731-32</p>
                                <p> +88017 555 98 446-47, 88 01844 114 822</p>
                                <p> salesdhk@hotelthecoxtoday.com</p>
                            </div>
                        </div>
                        <div>
                            <div className='space-y-2'>
                                <h1 className='text-4xl font-bold text-gray-600'>Chittagong Office</h1>
                                <p> 206/217, Jamal Khan Road, Pacific Tower (2nd Floor) Chittagong, Bangladesh.</p>
                                <p> +88 02 55035731-32</p>
                                <p> +88017 555 98 446-47, 88 01844 114 822</p>
                                <p> salesdhk@hotelthecoxtoday.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    </div>
);