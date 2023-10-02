AFRAME.registerComponent("cursor-listener", {
    schema:{
        selectedItemId:{default:"",type:"string"}
    },

    init: function () {
     this.handleMouseEnterEvents();
     this.handleMouseLeaveEvents();
    },

    handlePlacesListState:function(){
        const id=this.el.getAttribute("id")
        const mangasId=["bleach","onepiece","dragonballsuper","blackclover"]
        if(mangasId.includes(id)){
            const placeContainer=document.querySelector("#mangas-container")
            placeContainer.setAttribute("cursor-listener",{selectedItemId:id})
            this.el.setAttribute("material",{opacity:1,color:"blue"})
        }
    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState();
        })
    },
    
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const{selectedItemId}=this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute("id");
                if(id==selectedItemId){
                    el.setAttribute("material",{opacity:1,color:"red"})
                }
            }
        })
    }
})