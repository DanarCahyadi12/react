import { useState } from "react"
const Index = () => {
    // const user = [
    //     {name : "Danar cahyadi"},
    //     {name : "Ketut cahya"},
    //     {name : "Cahyaduu"},
    //     {name : "Cahyadois"},
    //     {name : "Alexanders"}
    // ]
    // let [index,setIndex] = useState(0)
    // let [name,setName] = useState(user[0].name)
    // let [value,setValue] = useState("")
    // const HandleClick = (index) => {
    //     setIndex(index)
    //     setName(user[index].name)
    // }
    // const HandleSearch = (e) => {
    //     if(e.target.value.length == 0) return setValue("")
    //     for(let n of user) {
    //         if(n.name.toLowerCase().includes(e.target.value.toLowerCase())){
    //             setValue(n.name)
    //             break
    //         }else{
    //             setValue("")
    //         }
    //     }
        
    // }
    // const HandleMove = () => {
    //     alert("MOVEEEE")
    // }
    // return (
    //     <section>
    //     <h1 className="title" style={{
    //         fontSize : "60px"
    //     }}>Welcome to my website</h1>
    //     <p>{name}</p>
    //     <p>{value}</p>
    //     <p>{value.length}</p>
    //     <button onClick={(e) => {
    //         index++
    //         if(index == user.length) index = 0
    //         HandleClick(index)
    //         }}>Click me</button>
    //     <button onMouseEnter={HandleMove}>move</button>
    
    //     <img src={require("../photo/10.jpg")}></img>
    //     </section>
    // );

    const data= [
        {name : "Danar cahyadi",age : 20,address : "Jl.Gn Agung",id:1},
        {name : "Cahyado",age : 10,address : "Jl.Gn Salak",id:2},
        {name : "Wayan dharma",age : 20,address : "Jl.California",id:4},
        {name : "Nyoman danira",age : 20,address : "Jl.Daaham",id:5},
        {name : "Putu dirandra",age : 19,address : "Jl.Petu matu",id:6},

    ]

    const SetDatas = () => {
        return data
    }
 
    const [datas,SetData] = useState(SetDatas())

    const HandleSearch = (e) => {
        let value = e.target.value
        let data = SearchData(value)
        SetData(data)


    }

    const SearchData = (value) => {
        let res = data.filter(val =>{
            if(val.name.toLowerCase().includes(value.toLowerCase()) || val.address.toLowerCase().includes(value.toLowerCase())) return val
        })
        return res
    }
    const GetData = () => {
            return datas.map(val => {
                return (
                <section className="card" key={val.id}>
                    <div className="name">{val.name}</div>
                    <div className="age">{val.age}</div>
                    <div className="address">{val.address}</div>
                </section>
            )
        })
    }

    return (
        <section className="wrapper">
            <input onInput={HandleSearch} className="search"></input>
            <GetData/>
        </section>
    )
}

export default Index