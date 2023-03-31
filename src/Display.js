import React ,{useState} from 'react'

const Display = () => {
const [paneldata,setpaneldata]=useState("1")
const [activetab,setactivetab]=useState("1")
    let contentHandle=(event,num)=>{
        
        if(num==="1"){
           setactivetab("1")
            setpaneldata(
                <>
                This data is belong to tab1
                </>
            )
        }
        else if(num==="2"){
            setactivetab("2")
            setpaneldata(
                <>
                This data is belong to tab2
                </>
            )
        }
        else{
            setactivetab("3")
            setpaneldata(
                <>
                This data is belong to tab3
                </>
            )
        }
    }
    return (
        <div style={{ justifyContent: "center" ,padding:"50px"}}>
            <div style={{ textAlign: "center", display: "flex", border: "1px solid",height:"fit-content",width:"fit-content" }} >
                <div style={{ textAlign: "center", padding: "10px", border: "1px solid" ,background:activetab==="1"?"black":"white",color:activetab==="1"?"white":"black"}} onClick={(e)=>contentHandle(e,"1")} name="tab1">
                    tab1
                </div >
                <div style={{ textAlign: "center", padding: "10px", border: "1px solid" ,background:activetab==="2"?"black":"white",color:activetab==="2"?"white":"black"}} onClick={(e)=>contentHandle(e,"2")} name="tab2">
                    tab2
                </div>
                <div style={{ textAlign: "center", padding: "10px", border: "1px solid" ,background:activetab==="3"?"black":"white",color:activetab==="3"?"white":"black"}} onClick={(e)=>contentHandle(e,"3")} name="tab3">
                    tab3
                </div>
            </div>
            <div style={{textAlign:"center",justifyContent:"center",border:"1px solid",height:"30vh"}}>
        {paneldata}
            </div>
        </div>
    )
}

export default Display;