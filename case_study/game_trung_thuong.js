// function addNumber() {
// let numb =parseInt(document.getElementById('1'))
// let numb1 =parseInt(document.getElementById('2'))
// let numb2 =parseInt(document.getElementById('3'))
// let numb3 =parseInt(document.getElementById('4'))
// let numb4 =parseInt(document.getElementById('5'))
// let numb5 =parseInt(document.getElementById('6'))
// }
// function cell(){
// let numb =[];
// for (let i=0;i<=6;i++){
//     numb[i]=+prompt("Bạn muốn lấy số mấy"+'['+(i+1)+']')
// }
// }
class GameTrungThuong {
    constructor(number,number1,number2,number3,number4,number5){
    this.number =number
    this.number1 =number1
    this.number2 =number2
    this.number3 =number3
    this.number4 =number4
    this.number5 =number5
    }
    getNumber (numb,numb1,numb2,numb3,numb4,numb5){
        this.number=numb;
        this.number1=numb1;
        this.number2=numb2;
        this.number3=numb3;
        this.number4=numb4;
        this.number5=numb5;

    }
}
class GiaiThuong {
    constructor(numb,numb1,numb2,numb3,numb4) {
        this.numb =numb;
        this.numb1 =numb1;
        this.numb2 =numb2;
        this.numb3 =numb3;
        this.numb4 =numb4;
    }
    setNumb(numb,numb1,numb2,numb3,numb4){
        numb =Math.floor(Math.random()*this.numb);
        numb1 =Math.floor(Math.random()*this.numb1);
        numb2 =Math.floor(Math.random()*this.numb2);
        numb3 =Math.floor(Math.random()*this.numb3);
        numb4 =Math.floor(Math.random()*this.numb4);
    }
}

let a = new GameTrungThuong(' <td><input type="number"></td>',)
let show =''
for (let i=0;i<3;i++){
    show='<table>\n' +
        '    <tr>\n' +
        '        <td><input type="number"></td>\n' +
        '        <td><input type="number"></td>\n' +
        '        <td><input type="number"></td>\n' +
        '        <td><input type="number"></td>\n' +
        '        <td><input type="number"></td>\n' +
        '        <td><input type="number"></td>\n' +
        '    </tr>\n'
}
document.getElementById('Gametr')
