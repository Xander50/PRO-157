AFRAME.registerComponent("poster", {
    init: function () {
      this.mangasContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "bleach",
          title: "Bleach",
          url: "./assets/s-l500.jpg"
        },
        {
          id: "blackclover",
          title: "Black Clover",
          url: "./assets/9781421587189_l.jpg",
        },
  
        {
          id: "dragonballsuper",
          title: "Dragon Ball Super",
          url: "./assets/9781421592541_p0_v1_s1200x630.jpg",
        },
        {
          id: "onepiece",
          title: "One Piece",
          url: "./assets/9781569319017_p0_v1_s1200x630.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -50;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;

        // Border Element
        const borderEl=this.createBorder(position,item.id);
        
        // Thumbnail Element
        const thumbnail=this.createThumbnail(item);
        borderEl.appendChild(thumbnail)
        // Title Text Element
        const titleEl=this.createTitleEl(position,item);
        borderEl.appendChild(titleEl)
        
        this.mangasContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEl=document.createElement("a-entity");
      entityEl.setAttribute("id",id);
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("position",position);
      entityEl.setAttribute("geometry",{primitive:"box",width:12,height:15});
      entityEl.setAttribute("material",{opacity:1,color:"black"});
      entityEl.setAttribute("cursor-listener",{})
      return entityEl;
    },
  
    createThumbnail:function(item){
      const entityEl=document.createElement("a-entity");
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("geometry",{primitive:"box",width:11,height:13});
      entityEl.setAttribute("material",{src:item.url});
      return entityEl;
    },
  
    createTitleEl:function(position,item){
      const entityEl=document.createElement("a-entity");
      entityEl.setAttribute("text",{font:"exo2bold",align:"center",width:70,color:"black",value:item.title});
      const elPosition=position;
      elPosition.y=-20;
      entityEl.setAttribute("position",elPosition);
      entityEl.setAttribute("visible",true);
      return entityEl;
    },
    
    
  });
  