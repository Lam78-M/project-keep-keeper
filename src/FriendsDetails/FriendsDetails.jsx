import React,{use} from 'react';
import { Link } from 'react-router';

const FriendsDetails = ({friendsPromise}) => {
    console.log(friendsPromise)
    const friend = use(friendsPromise);
    console.log(friend.length)

    const tagColors = {
  "college": "bg-blue-100 text-blue-600",
  "close friend": "bg-green-100 text-green-600"
};

const statusColors = {
  "Overdue": "bg-red-500 text-white",
  "On-track": "bg-green-800 text-white",
  "Almost Due": "bg-yellow-400 text-black"
};



    return (<>

     <div>
   <div className='grid md:grid-cols-2 lg:grid-cols-4  gap-6 pl-37 pr-37  bg-[#F8FAFC] pt-20 pb-30'>
    {
    friend.map(friend =>{

     
  const status =
  friend.Intrack?.[
    Math.floor(Math.random() * (friend.Intrack?.length || 1))
  ];

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
                 {/* 99999999999999999999999999999999 */}
                 <div className="flex gap-2 flex-wrap justify-center mt-2">
  {friend.tags.map((tag, index) => (
    <span
      key={index}
       className={`px-3 py-1 rounded-full text-sm font-semibold ${
    tagColors[tag] || "bg-green-200 text-gray-600"
  }`}
>
      {tag}
    </span>
  ))}
</div>
                  <br />
 <div className="flex justify-center mt-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                statusColors[status] || "bg-gray-400 text-white"
              }`}
            >
              {status}
            </span>
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