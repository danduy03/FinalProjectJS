/* Reload mỗi lần sẽ ra 1 ảnh random mới */

function loadChange(){
    options = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
    randomImage = "images/" + options[Math.floor(Math.random()*options.length)]; // lấy từ folder + file name
    img = document.querySelector("#header_img");
    img.setAttribute("src", randomImage);
    img.setAttribute("alt", "");
}

/* Thêm phần tử thông qua prompt */

var fruits = ["Banana", "Orange", "Apple", "Mango"]; //Khai báo mảng
function loadFruits() {
    document.getElementById("fruits").innerHTML = fruits; //Để mảng hiển thị ra ngoài
}

function myFunction() {
    var fruit = prompt("What's is your favorite fruits: "); // Cho phép nhập từ input và gán vào biến fruit
    fruits[fruits.length] = fruit; //Có nghĩa là gán thông tin vừa được lưu ở biến fruit vào cuối phần tử
    document.getElementById("fruits").innerHTML = fruits; //Hiển thị ra màn hình
}

/* Làm việc với hàm có tham số để thao tác với this trả về ảnh và thuộc tính khi hover */
function upDate(previewPic) {
    var divImage = document.getElementById("image");
    divImage.style.backgroundImage = "url(' " + previewPic.src + " ')";

    divImage.innerHTML = previewPic.alt;
}

function unDo() {
    var divImage = document.getElementById("image");
    divImage.style.backgroundImage = "url('')";

    divImage.innerHTML = "Hover over an image bellow to display here.";
}

/* Hiển thị random ra 3 ảnh và dùng hover cho chuột, và tabindex cho focus tăng khả năng truy cập */
function callThree(){
    options = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]; //Khai báo mảng options với các phần tử là chuỗi ảnh
    currentImage = document.querySelectorAll(".curent img"); // chọn toàn bộ phần tử có class cha là current và thẻ là img gán cho biến

    for(var i = 0; i < currentImage.length; i++){ // Vòng lặp for để chạy
        console.log("Image " + i);
        randomImage = "images/" + options[Math.floor(Math.random() * options.length)]; // Tên folder + random file ảnh gán cho biến

        currentImage[i].src = randomImage; //
        currentImage[i].setAttribute("tabindex", "0"); //set thuộc tính và giá trị cho nó
    }

}


