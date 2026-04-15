import React from 'react';

const FriendList = () => {
    return (
        <div className=' bg-[#F8FAFC] '>
              <div className='container mx-auto bg bg-[#F8FAFC] space-y-10 pt-30'>
                 <h1 className='text-4xl font-bold text-center'>Friends to keep close in your life</h1>
               <h3 className='text-center text-[#64748bb5]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
relationships that matter most.</h3> 

                 <button className='btn bg-[#244D3F] text-white block mx-auto rounded-md'>+ Add a Friend</button>
                 <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6  pb-10 pl-37 pr-37'>
                    <div className='bg-white text-center p-7 rounded-lg border border-[#00000014]'>
                        <h1 className='text-2xl text-[#244D3F]'>10</h1>
                        <p className='text-[#64748B]'>Total Friends</p>
                    </div>
                    <div className='bg-white text-center p-7 rounded-lg border border-[#00000014]'>
                        <h1 className='text-2xl text-[#244D3F]'>10</h1>
                        <p className='text-[#64748B]'>On Track</p>
                    </div>
                    <div className='bg-white text-center p-7 rounded-lg border border-[#00000014]'>
                        <h1 className='text-2xl text-[#244D3F]'>10</h1>
                        <p className='text-[#64748B]'>Need Attention</p>
                    </div>
                    <div className='bg-white text-center p-7 rounded-lg border border-[#00000014]'>
                        <h1 className='text-2xl text-[#244D3F]'>10</h1>
                        <p className='text-[#64748B]'>Interaction</p>
                        
                    </div>
                    
                 </div>
                
              </div>
           
        </div>
    );
};

export default FriendList;