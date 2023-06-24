
    const person={
        name:"mithiun",
        age:21,
        address:{
            street:"b8 bolock b,industial area",
            city:"noida sector 3",
            state:"utter pradesh"
        }
    }
    function extract(Obj){
        let {name,street}={name:Obj.name,street:Obj.address.street};
        let obj={name,street};
        return obj;
    }

    console.log(extract(person));