 let x = prompt("chieu dai")
 let y= prompt("chieu rong")
 s=x*y
 c=(x+y)*2
let hcn=document.getElementById("mycanvas")
let ctx=hcn.getContext("2d")
ctx.fillRect(50,50,x,y)
 document.write("dien tich hcn" + s + "<br>")
 document.write("chu vi hinh chu nhat "+ c)
