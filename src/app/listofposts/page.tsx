import Image from "next/image";

const getPostsData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

const getUserData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}

const getDogData = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random',{
        // next:{
        //     revalidate:10,
        // }
        cache:"no-store"
    });
    return res.json();
}

export default async function ListOfPosts() {

    const [post, user,dog] = await Promise.all([
        getPostsData(), 
        getUserData(),
        getDogData()
    ]);

    return (
            <div>
                <Image src={dog.message} alt="A Dog" width={300} height={300} objectFit="contain"
                />
                {
                    post?.map((curr: any) => (
                        <p>{curr?.title}</p>
                    ))
                }
                {
                    user?.map((curr: any) => (
                        <p>{curr?.name}</p>
                    ))
                }
            </div>
    )
}