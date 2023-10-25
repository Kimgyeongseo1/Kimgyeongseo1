let myfoodName2 = document.querySelector("#myfoodName2");
let myfoodPrice2 = document.querySelector("#myfoodPrice2");
let myfood2 = document.getElementById("myfood2");
let spec_is2 = document.querySelector(".spec_is2");

function show2(x) {
    alert("ok");
    let imgSrc2 = x.getAttribute("src"); //이미지경로
    let imgAlt2 = x.getAttribute("alt"); //상품명
    let imgPrice2 = x.getAttribute("title"); //가격정보

    if (imgAlt2 == "상품1") {
      spec_is2.innerHTML = `
            <p> 상품1의 설명은~~~      </p>
      
      `;
    } else if (imgAlt2 == "상품2") {
      spec_is2.innerHTML = `
            <p> 상품2의 설명은~~~      </p>
      
      `;
    } else if (imgAlt2 == "상품3") {
      spec_is2.innerHTML = `
            <p> 상품3의 설명은~~~      </p>
      
      `;
    } else if (imgAlt2 == "상품4") {
      spec_is2.innerHTML = `
            <p> 상품4의 설명은~~~      </p>
      
      `;
    } else if (imgAlt2 == "상품5") {
      spec_is2.innerHTML = `
            <p> 상품5의 설명은~~~      </p>
      
      `;
    } else if (imgAlt2 == "상품6") {
      spec_is2.innerHTML = `
            <p> 상품6의 설명은~~~      </p>
      
      `;
    }

   

    myfood2.setAttribute("src", imgSrc2); //상세보기에서 선택한상품을 보여준다
    myfoodName2.innerText = imgAlt2; //선택한 상품명을 보여준다
    myfoodPrice2.innerText = imgPrice2; //선택한 상품가격정보를 보여준다

    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
  }

 
   










