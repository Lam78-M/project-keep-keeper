import React,{use} from 'react';


const FriendsDetails = ({friendsPromise}) => {
    console.log(friendsPromise)
    const friend = use(friendsPromise);
    console.log(friend.length)
    return (
        <div>
   <div className='grid md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-4 pl-37 pr-37 p-4'>
    {
    friend.map(friend =>{
        console.log(friend)
        return <div className=''>
      <div className=" bg-base-100  shadow-sm">
     
      <div className='flex justify-center items-center'>
        <img className='w-20 rounded-full p-2 ' src={friend.picture} onError={() => console.log("Image failed")} 
      alt="Man" />
      </div>
    <h2 className='text-2xl text-center'>{friend.name}</h2>
    <p className='text-center'>{friend.talk}</p>
    
      <div className="card-body">
    
      <div className="badge badge-outline">{friend.email}</div>
      <br></br>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

    })
   }
   </div>
   </div>
    );
};

export default FriendsDetails;