#CROSSWORD
from PIL import Image, ImageDraw, ImageFont

image = Image.new("RGB",(900,900),color="white")
import random 

crossword = ImageDraw.Draw(image)

#hArray=[]

matrix=[]
fontsize = 14
font = ImageFont.truetype("arial.ttf", fontsize)


#create matrix
for i in range(0,2500):
    matrix.append(str(random.randint(0,9)))

#create crossword
for j in range(0,50):
    for i in range(0,50):
        #print(matrix[i+50*j],end=" ")
        crossword.text((50+j*15,50+i*15),str(matrix[j+50*i]),fill='black',spacing=10,font=font)
    #print()
#print(matrix)



def checkHorizontal():
    hArray=[]
    position=[]
    pageDim = 20
    start = 0
    end = 50
    while end<2500:
        rowNumber = (start/50)+1
        for i in range(start,end):
            hArray.append(matrix[i])
        
        for x in range(0,48):
            if hArray[x]==hArray[x+1] and hArray[x]==hArray[x+2]:
                print("Row: ", rowNumber," Position: ",x)
                print("Element number in matrix",start+x)
                position.append(start+x)       
        hArray=[]

        start+=50
        end+=50

checkHorizontal()
image.save("wowu.png")  