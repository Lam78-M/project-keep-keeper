import React,{use} from 'react';
import { Link } from 'react-router';

const FriendsDetails = ({friendsPromise}) => {
    console.log(friendsPromise)
    const friend = use(friendsPromise);
    console.log(friend.length)

    return (<>

     <div>
   <div className='grid md:grid-cols-2 lg:grid-cols-4  gap-6 pl-37 pr-37  bg-[#F8FAFC] pt-20 pb-30'>
    {
    friend.map(friend =>{

        return (
          <Link key={friend.id} to={`/friendscall/${friend.id}`}>

          <div className=''>
            <div className=" bg-[white]  shadow-sm rounded-md container p-5 mx-auto">
     
              <div className='flex justify-center items-center'>
                <img className='w-25 rounded-full p-2 '
                 src={friend.picture} 
                 onError={() => console.log("Image failed")} 
                 alt="Man" />
              </div>

              <h2 className='text-2xl text-center font-semibold pt-5'>
                {friend.name}
              </h2>

              <p className='text-center text-[#64748B] font-semibold'>
                {friend.talk}
              </p>

              <div className="card-body">
                <div className="card-body flex flex-col items-center">
                  <div className="badge bg-[#CBFADB] font-semibold p-3 rounded-4xl">
                    {friend.work}
                  </div>
                  <br />
                  <div className="badge bg-[#EF4444] text-white p-3 rounded-4xl">
                    {friend.what}
                  </div>
                </div>
              </div>

            </div>
          </div>

          </Link>
        )
    })
   }
   </div>
   </div>

    </>)
};

export default FriendsDetails;