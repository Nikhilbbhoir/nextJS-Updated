'use client'
export default function DeleteUser(props){
    const id = props.id;

    const deleteuser = async()=>{
        let data = await fetch("http://localhost:3000/api/user/"+id,
        {
            method:"DELETE",
        })
        data = await data.json();
        console.log(data);
        if(data.success){
            alert(data.result);
        }
    }

    return <button onClick={deleteuser}>Delete</button>
}