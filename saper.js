//SAPER CONTROLLER
const saperController = (function () {
    let data = {
        tab: [],
        gridHeight: 9,
        gridWidth: 9,
        bombsNumber: 10,
        start: false
    };

    const classNames = {
        fEmpty: "field--empty",
        flEmpty: "field__flag--empty",
        fqEmpty: "field__questionmark--empty",
        fBomb: "field--bomb",
        flBomb: "field__flag--bomb",
        fqBomb: "field__questionmark--bomb",
        fBoom: "field--explosion",
        fClear: "field--clear"
    };

    const hints = function(x, y) {
        let xx, yy, temp;

        if (data.gridWidth <= data.gridHeight) {
            xx = data.gridWidth;
            yy = data.gridHeight;

            //LEFT-TOP
            if (x - 1 >= 0 && x - 1 < xx && y - 1 >= 0 && y - 1 < yy) {
                temp = data.tab[x - 1][y - 1].innerHTML;
                if (temp != -1) {
                    temp++;
                    data.tab[x - 1][y - 1].innerHTML = temp;
                    data.tab[x - 1][y - 1].setAttribute('data-hint', temp);
                }
            }
                
            //TOP
            if (x >= 0 && x < xx && y - 1 >= 0 && y - 1 < yy) {
                temp = data.tab[x][y - 1].innerHTML;
        
                if (temp != -1) {
                    temp++;
                    data.tab[x][y - 1].innerHTML = temp;
                    data.tab[x][y - 1].setAttribute('data-hint', temp);
                }
            }
                
            //RIGHT-TOP
            if (x + 1 >= 0 && x + 1 < xx && y - 1 >= 0 && y - 1 < yy) {
                temp = data.tab[x + 1][y - 1].innerHTML;
        
                if (temp != -1) {
                    temp++;
                    data.tab[x + 1][y - 1].innerHTML = temp;
                    data.tab[x + 1][y - 1].setAttribute('data-hint', temp);
                }
            }
        
            //LEFT
            if (x - 1 >= 0 && x - 1 < xx && y >= 0 && y < yy) {
                temp = data.tab[x - 1][y].innerHTML;
        
                if (temp != -1) {
                    temp++;
                    data.tab[x - 1][y].innerHTML = temp;
                    data.tab[x - 1][y].setAttribute('data-hint', temp);
                }
            }
                
            //RIGHT
            if (x + 1 >= 0 && x + 1 < xx && y >= 0 && y < yy) {
                temp = data.tab[x + 1][y].innerHTML;
        
                if (temp != -1) {
                    temp++;
                    data.tab[x + 1][y].innerHTML = temp;
                    data.tab[x + 1][y].setAttribute('data-hint', temp);
                }
            }
                
            //LEFT-BOTTOM
            if (x - 1 >= 0 && x - 1 < xx && y + 1 >= 0 && y + 1 < yy) {
                temp = data.tab[x - 1][y + 1].innerHTML;
        
                if(temp != -1) {
                    temp++;
                    data.tab[x - 1][y + 1].innerHTML = temp;
                    data.tab[x - 1][y + 1].setAttribute('data-hint', temp);
                }					
            }	
                
            //BOTTOM
            if (x >= 0 && x < xx && y + 1 >= 0  && y + 1 < yy) {
                temp = data.tab[x][y + 1].innerHTML;
                
                if (temp != -1) {
                    temp++;
                    data.tab[x][y + 1].innerHTML = temp;
                    data.tab[x][y + 1].setAttribute('data-hint', temp);
                }
            }
        
            //RIGHT-BOTTOM
            if (x + 1 >= 0 && x + 1 < xx && y + 1 >= 0 && y + 1 < yy) {
                temp = data.tab[x + 1][y + 1].innerHTML;
        
                if (temp != -1) {
                    temp++;
                    data.tab[x + 1][y + 1].innerHTML = temp;
                    data.tab[x + 1][y + 1].setAttribute('data-hint', temp);
                }
            }	
        } else {
            xx = data.gridHeight;
            yy = data.gridWidth;

            let tmp;
            tmp = y;
            y = x;
            x = tmp;

            //LEFT-TOP
            if (x - 1 >= 0 && x - 1 < yy && y - 1 >= 0 && y - 1 < xx) {
                temp = data.tab[y - 1][x - 1].innerHTML;
                
                if (temp != -1) {
                    temp++;
                    data.tab[y - 1][x - 1].innerHTML = temp;
                    data.tab[y - 1][x - 1].setAttribute('data-hint', temp);
                }
            }
              
            //TOP
            if (x >= 0 && x < xx && y - 1 >= 0 && y - 1 < yy) {
                temp = data.tab[y - 1][x].innerHTML;
                if (temp != -1) {
                    temp++;
                    data.tab[y - 1][x].innerHTML = temp;
                    data.tab[y - 1][x].setAttribute('data-hint', temp);
                }
            }
                
            //RIGHT-TOP
            if (x + 1 >= 0 && x + 1 < xx && y - 1 >= 0 && y - 1 < yy) {
                temp = data.tab[y - 1][x + 1].innerHTML;

                if (temp != -1) {
                    temp++;
                    data.tab[y - 1][x + 1].innerHTML = temp;
                    data.tab[y - 1][x + 1].setAttribute('data-hint', temp);
                }
            }

            //LEFT
            if (x - 1 >= 0 && x - 1 < xx && y >= 0 && y < yy) {
                temp = data.tab[y][x - 1].innerHTML;

                if (temp != -1) {
                    temp++;
                    data.tab[y][x - 1].innerHTML = temp;
                    data.tab[y][x - 1].setAttribute('data-hint', temp);
                }
            }
                
            //RIGHT
            if (x + 1 >= 0 && x + 1 < xx && y >= 0 && y < yy) {
                temp = data.tab[y][x + 1].innerHTML;

                if (temp != -1) {
                    temp++;
                    data.tab[y][x + 1].innerHTML = temp;
                    data.tab[y][x + 1].setAttribute('data-hint', temp);
                }
            }
                
            //LEFT-BOTTOM
            if (x - 1 >= 0 && x - 1 < xx && y + 1 >= 0 && y + 1 < yy) {
                temp = data.tab[y + 1][x - 1].innerHTML;

                if(temp != -1) {
                    temp++;
                    data.tab[y + 1][x - 1].innerHTML = temp;
                    data.tab[y + 1][x - 1].setAttribute('data-hint', temp);
                }					
            }	
                
            //BOTTOM
            if (x >= 0 && x < xx && y + 1 >= 0  && y + 1 < yy) {
                temp = data.tab[y + 1][x].innerHTML;
                
                if (temp != -1) {
                    temp++;
                    data.tab[y + 1][x].innerHTML = temp;
                    data.tab[y + 1][x].setAttribute('data-hint', temp);
                }
            }

            //RIGHT-BOTTOM
            if (x + 1 >= 0 && x + 1 < xx && y + 1 >= 0 && y + 1 < yy) {
                temp = data.tab[y + 1][x + 1].innerHTML;

                if (temp != -1) {
                    temp++;
                    data.tab[y + 1][x + 1].innerHTML = temp;
                    data.tab[y + 1][x + 1].setAttribute('data-hint', temp);
                }
            }
      
        }
    };

    const clearArea = function(x, y) {
        let xx, yy;

        if (data.gridWidth <= data.gridHeight) {
            xx = data.gridWidth;
            yy = data.gridHeight;

            //LEFT-TOP
            if (x - 1 >= 0 && x - 1 < xx && y - 1 >= 0 && y - 1 < yy) {
                let temp = data.tab[x - 1][y - 1].innerHTML;
        
                if ( temp > 0 && data.tab[x - 1][y - 1].className == classNames.fEmpty ) {
                    data.tab[x - 1][y - 1].className = classNames.fClear;
                    data.tab[x - 1][y - 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[x - 1][y - 1].style.fontSize = parseInt(data.tab[x - 1][y - 1].style.height) * 0.75 + "px";
                }                
            }            

            //TOP
            if (x >= 0 && x < xx && y - 1 >= 0 && y - 1 < yy) {
                let temp = data.tab[x][y - 1].innerHTML;
        
                if (temp == 0 && data.tab[x][y - 1].className != classNames.fClear) {
                    data.tab[x][y - 1].innerHTML = temp;
                    data.tab[x][y - 1].setAttribute('data-hint', temp);

                    data.tab[x][y - 1].className = classNames.fClear;
                    data.tab[x][y - 1].style.backgroundImage = "URL('dist/field--clear.svg')";

                    data.tab[x][y - 1].style.fontSize = 0;

                    clearArea(x, y - 1);
                } else if ( temp > 0 && data.tab[x][y - 1].className == classNames.fEmpty ) {
                    data.tab[x][y - 1].className = classNames.fClear;
                    data.tab[x][y - 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[x][y - 1].style.fontSize = parseInt(data.tab[x][y - 1].style.height) * 0.75 + "px";
                }
            }

            //RIGHT-TOP
            if (x + 1 >= 0 && x + 1 < xx && y - 1 >= 0 && y - 1 < yy) {      
                let temp = data.tab[x + 1][y - 1].innerHTML;
        
                if ( temp > 0 && data.tab[x + 1][y - 1].className == classNames.fEmpty ) {
                    data.tab[x + 1][y - 1].className = classNames.fClear;
                    data.tab[x + 1][y - 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[x + 1][y - 1].style.fontSize = parseInt(data.tab[x + 1][y - 1].style.height) * 0.75 + "px";
                }   
            }            
        
            //LEFT
            if (x - 1 >= 0 && x - 1 < xx && y >= 0 && y < yy) {
                let temp = data.tab[x - 1][y].innerHTML;
        
                if (temp == 0 && data.tab[x - 1][y].className != classNames.fClear) {
                    data.tab[x - 1][y].innerHTML = temp;
                    data.tab[x - 1][y].setAttribute('data-hint', temp);

                    data.tab[x - 1][y].className = classNames.fClear;
                    data.tab[x - 1][y].style.backgroundImage = "URL('dist/field--clear.svg')";

                    data.tab[x - 1][y].style.fontSize = 0;

                    clearArea(x - 1, y);
                } else if ( temp > 0 && data.tab[x - 1][y].className == classNames.fEmpty ) {
                    data.tab[x - 1][y].className = classNames.fClear;
                    data.tab[x - 1][y].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[x - 1][y].style.fontSize = parseInt(data.tab[x - 1][y].style.height) * 0.75 + "px";
                }
            }
                
            //RIGHT
            if (x + 1 >= 0 && x + 1 < xx && y >= 0 && y < yy) {
                let temp = data.tab[x + 1][y].innerHTML;
        
                if (temp == 0 && data.tab[x + 1][y].className != classNames.fClear) {
                    data.tab[x + 1][y].innerHTML = temp;
                    data.tab[x + 1][y].setAttribute('data-hint', temp);

                    data.tab[x + 1][y].className = classNames.fClear;
                    data.tab[x + 1][y].style.backgroundImage = "URL('dist/field--clear.svg')";

                    data.tab[x + 1][y].style.fontSize = 0;

                    clearArea(x + 1, y);
                } else if ( temp > 0 && data.tab[x + 1][y].className == classNames.fEmpty ) {
                    data.tab[x + 1][y].className = classNames.fClear;
                    data.tab[x + 1][y].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[x + 1][y].style.fontSize = parseInt(data.tab[x + 1][y].style.height) * 0.75 + "px";
                }
            }

            //LEFT-BOTTOM
            if (x - 1 >= 0 && x - 1 < xx && y + 1 >= 0 && y + 1 < yy) {
                let temp = data.tab[x - 1][y + 1].innerHTML;
        
                if ( temp > 0 && data.tab[x - 1][y + 1].className == classNames.fEmpty ) {
                    data.tab[x - 1][y + 1].className = classNames.fClear;
                    data.tab[x - 1][y + 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[x - 1][y + 1].style.fontSize = parseInt(data.tab[x - 1][y + 1].style.height) * 0.75 + "px";
                }  				
            }            
                
            //BOTTOM
            if (x >= 0 && x < xx && y + 1 >= 0  && y + 1 < yy) {
                let temp = data.tab[x][y + 1].innerHTML;
                
                if (temp == 0 && data.tab[x][y + 1].className != classNames.fClear) {
                    data.tab[x][y + 1].innerHTML = temp;
                    data.tab[x][y + 1].setAttribute('data-hint', temp);

                    data.tab[x][y + 1].className = classNames.fClear;
                    data.tab[x][y + 1].style.backgroundImage = "URL('dist/field--clear.svg')";

                    data.tab[x][y + 1].style.fontSize = 0;

                    clearArea(x, y + 1);
                } else if ( temp > 0 && data.tab[x][y + 1].className == classNames.fEmpty ) {
                    data.tab[x][y + 1].className = classNames.fClear;
                    data.tab[x][y + 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[x][y + 1].style.fontSize = parseInt(data.tab[x][y + 1].style.height) * 0.75 + "px";
                }
            }

            //RIGHT-BOTTOM
            if (x + 1 >= 0 && x + 1 < xx && y + 1 >= 0 && y + 1 < yy) {
                let temp = data.tab[x + 1][y + 1].innerHTML;
        
                if ( temp > 0 && data.tab[x + 1][y + 1].className == classNames.fEmpty ) {
                    data.tab[x + 1][y + 1].className = classNames.fClear;
                    data.tab[x + 1][y + 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[x + 1][y + 1].style.fontSize = parseInt(data.tab[x + 1][y + 1].style.height) * 0.75 + "px";
                }  
            }  
        } else {
            xx = data.gridHeight;
            yy = data.gridWidth;

            let tmp;
            tmp = y;
            y = x;
            x = tmp;
            
            //LEFT-TOP
            if (x - 1 >= 0 && x - 1 < yy && y - 1 >= 0 && y - 1 < xx) {
                let temp = data.tab[y - 1][x - 1].innerHTML;
                
                if ( temp > 0 && data.tab[y - 1][x - 1].className == classNames.fEmpty ) {
                    data.tab[y - 1][x - 1].className = classNames.fClear;
                    data.tab[y - 1][x - 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[y - 1][x - 1].style.fontSize = parseInt(data.tab[y - 1][x - 1].style.height) * 0.75 + "px";
                }                
            }  

            //TOP
            if (x >= 0 && x < xx && y - 1 >= 0 && y - 1 < yy) {
                let temp = data.tab[y - 1][x].innerHTML;

                if (temp == 0 && data.tab[y - 1][x].className != classNames.fClear) {
                    data.tab[y - 1][x].innerHTML = temp;
                    data.tab[y - 1][x].setAttribute('data-hint', temp);

                    data.tab[y - 1][x].className = classNames.fClear;
                    data.tab[y - 1][x].style.backgroundImage = "URL('dist/field--clear.svg')";

                    data.tab[y - 1][x].style.fontSize = 0;

                    clearArea(y - 1, x);
                } else if ( temp > 0 && data.tab[y - 1][x].className == classNames.fEmpty ) {
                    data.tab[y - 1][x].className = classNames.fClear;
                    data.tab[y - 1][x].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[y - 1][x].style.fontSize = parseInt(data.tab[y - 1][x].style.height) * 0.75 + "px";
                }
            }

            //RIGHT-TOP
            if (x + 1 >= 0 && x + 1 < xx && y - 1 >= 0 && y - 1 < yy) {
                let temp = data.tab[y - 1][x + 1].innerHTML;

                if ( temp > 0 && data.tab[y - 1][x + 1].className == classNames.fEmpty ) {
                    data.tab[y - 1][x + 1].className = classNames.fClear;
                    data.tab[y - 1][x + 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[y - 1][x + 1].style.fontSize = parseInt(data.tab[y - 1][x + 1].style.height) * 0.75 + "px";
                }   
            }             

            //LEFT
            if (x - 1 >= 0 && x - 1 < xx && y >= 0 && y < yy) {
                let temp = data.tab[y][x - 1].innerHTML;

                if (temp == 0 && data.tab[y][x - 1].className != classNames.fClear) {
                    data.tab[y][x - 1].innerHTML = temp;
                    data.tab[y][x - 1].setAttribute('data-hint', temp);

                    data.tab[y][x - 1].className = classNames.fClear;
                    data.tab[y][x - 1].style.backgroundImage = "URL('dist/field--clear.svg')";

                    data.tab[y][x - 1].style.fontSize = 0;

                    clearArea(y, x - 1);
                } else if ( temp > 0 && data.tab[y][x - 1].className == classNames.fEmpty ) {
                    data.tab[y][x - 1].className = classNames.fClear;
                    data.tab[y][x - 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[y][x - 1].style.fontSize = parseInt(data.tab[y][x - 1].style.height) * 0.75 + "px";
                }
            }
                
            //RIGHT
            if (x + 1 >= 0 && x + 1 < xx && y >= 0 && y < yy) {
                let temp = data.tab[y][x + 1].innerHTML;

                if (temp == 0 && data.tab[y][x + 1].className != classNames.fClear) {
                    data.tab[y][x + 1].innerHTML = temp;
                    data.tab[y][x + 1].setAttribute('data-hint', temp);

                    data.tab[y][x + 1].className = classNames.fClear;
                    data.tab[y][x + 1].style.backgroundImage = "URL('dist/field--clear.svg')";

                    data.tab[y][x + 1].style.fontSize = 0;
                    
                    clearArea(y, x + 1);
                } else if ( temp > 0 && data.tab[y][x + 1].className == classNames.fEmpty ) {
                    data.tab[y][x + 1].className = classNames.fClear;
                    data.tab[y][x + 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[y][x + 1].style.fontSize = parseInt(data.tab[y][x + 1].style.height) * 0.75 + "px";
                }
            }

            //LEFT-BOTTOM
            if (x - 1 >= 0 && x - 1 < xx && y + 1 >= 0 && y + 1 < yy) {
                let temp = data.tab[y + 1][x - 1].innerHTML;
        
                if ( temp > 0 && data.tab[y + 1][x - 1].className == classNames.fEmpty ) {
                    data.tab[y + 1][x - 1].className = classNames.fClear;
                    data.tab[y + 1][x - 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[y + 1][x - 1].style.fontSize = parseInt(data.tab[y + 1][x - 1].style.height) * 0.75 + "px";
                }  				
            }              

            //BOTTOM
            if (x >= 0 && x < xx && y + 1 >= 0  && y + 1 < yy) {
                let temp = data.tab[y + 1][x].innerHTML;
                
                if (temp == 0 && data.tab[y + 1][x].className != classNames.fClear) {
                    data.tab[y + 1][x].innerHTML = temp;
                    data.tab[y + 1][x].setAttribute('data-hint', temp);

                    data.tab[y + 1][x].className = classNames.fClear;
                    data.tab[y + 1][x].style.backgroundImage = "URL('dist/field--clear.svg')";

                    data.tab[y + 1][x].style.fontSize = 0;

                    clearArea(y + 1, x);
                } else if ( temp > 0 && data.tab[y + 1][x].className == classNames.fEmpty ) {
                    data.tab[y + 1][x].className = classNames.fClear;
                    data.tab[y + 1][x].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[y + 1][x].style.fontSize = parseInt(data.tab[y + 1][x].style.height) * 0.75 + "px";
                }
            }

            //RIGHT-BOTTOM
            if (x + 1 >= 0 && x + 1 < xx && y + 1 >= 0 && y + 1 < yy) {
                let temp = data.tab[y + 1][x + 1].innerHTML;
        
                if ( temp > 0 && data.tab[y + 1][x + 1].className == classNames.fEmpty ) {
                    data.tab[y + 1][x + 1].className = classNames.fClear;
                    data.tab[y + 1][x + 1].style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                    data.tab[y + 1][x + 1].style.fontSize = parseInt(data.tab[y + 1][x + 1].style.height) * 0.75 + "px";
                }  
            }              
        }
    };

    const plantBombs = function(field) {
        let count = data.bombsNumber;
        
        while (count> 0) {
            const x = Math.floor(Math.random() * data.gridWidth); 		
            const y = Math.floor(Math.random() * data.gridHeight); 							  
                    
            if (data.tab[x][y].className != classNames.fBomb && data.tab[x][y] != field) { 
                data.tab[x][y].className = classNames.fBomb;
                data.tab[x][y].innerHTML = -1;
                count--; 
                hints(x, y);
            }
        }
    };

    const checkScore = function() {
        const numberOfFlags = document.querySelectorAll("." + classNames.flBomb).length;
        const numberOfQuestionmarks = document.querySelectorAll("." + classNames.fqBomb).length;
        const numberOfBombFields = document.querySelectorAll("." + classNames.fBomb).length;
        const numberOfClearFields = document.querySelectorAll("." + classNames.fClear).length;

        const numberOfMoves = numberOfClearFields + numberOfFlags + numberOfQuestionmarks + numberOfBombFields;

        if( numberOfMoves == data.gridHeight * data.gridWidth ) {  
            endGame(true);
            setTimeout(function() {
                alert("Congratulations! You have won!");
                location.reload();
            }, 100);	
        }
    };

    const endGame = function(result) {
        for (let i = 0 ; i < data.gridWidth ; i++) {
            for (let j = 0 ; j < data.gridHeight ; j++) {
                //Game ended as loss
                if(data.tab[i][j].className == classNames.fBomb && result == false) {
                    data.tab[i][j].style.backgroundImage = "URL('dist/field__bomb.svg')";
                }else if(data.tab[i][j].className == classNames.fBoom && result == false) {
                    data.tab[i][j].style.backgroundImage = "URL('dist/field__bomb--explosion.svg')";
                }

                //Game ended as win
                if(data.tab[i][j].innerHTML == -1 && result == true) {
                    data.tab[i][j].style.backgroundImage = "URL('dist/field__bomb--defused.svg')";
                }
            }
        }	
    };

    return {

        getData: function() {
            return data;
        },

        setData: function() {
            data.gridHeight = parseInt(document.getElementById("width").value);
            data.gridWidth = parseInt(document.getElementById("height").value);
            data.bombsNumber = parseInt(document.getElementById("mines").value);
        },

        //Check inputs values
        checkData: function() {
            if (data.gridHeight <= 2 && data.gridHeight >= 99 && data.gridWidth <= 2 && data.gridWidth >= 99) {
                return -2; //Invalid grid size
            } else if (data.bombsNumber >= data.gridHeight * data.gridWidth) {
                return -1; //Too many bombs
            } else {
                return 0; //OK
            }
        },

        getclassNames: function() {
            return classNames;
        },

        getIndexOfElement: function(array, element) {
            for (var i = 0; i < array.length; i++) {
                var index = array[i].indexOf(element);
                if (index > -1) {
                    return [i, index];
                }
            }
        },

        clickField: function(e) {
            const field = e.target;
            
            if(!document.querySelector(".field--bomb") && data.start == false) { //Plant the bombs after first click on field
                plantBombs(field);
                data.start = true;
            }

            if (e.which == 1) { //LEFT CLICK
                if (field.innerHTML == "-1") { //Click on bomb
                    field.className = classNames.fBoom;
                    endGame(false);
                    setTimeout(function() {
                        alert("You have lost!");
                        location.reload(); 
                    }, 100);		
                } else if (field.className == classNames.fEmpty) { //Click on empty field
                    field.className = classNames.fClear;

                    if (field.innerHTML== 0) {
                        field.style.fontSize = 0;
                        clearArea(...this.getIndexOfElement(data.tab, field));
                    }

                    if (field.innerHTML > 0) {
                        field.style.backgroundImage = "URL('dist/field--empty--dark.svg')";
                        field.style.fontSize = parseInt(field.style.height) * 0.75 + "px";
                    }
                }
            } else if (e.which == 3) { //RIGHT CLICK
                if (field.className == classNames.fBomb) {
                    field.className = classNames.flBomb;
                    field.style.backgroundImage = "URL('dist/field__flag.svg')";	
                    data.bombsNumber--;
                } else if (field.className == classNames.fEmpty) {
                    field.className = classNames.flEmpty;
                    field.style.backgroundImage = "URL('dist/field__flag.svg')";
                    data.bombsNumber--;
                } else if (field.className == classNames.flBomb) {
                    field.className = classNames.fqBomb;
                    field.style.backgroundImage = "URL('dist/field__questionmark.svg')";	
                    data.bombsNumber++;
                } else if (field.className == classNames.flEmpty) {
                    field.className = classNames.fqEmpty;
                    field.style.backgroundImage = "URL('dist/field__questionmark.svg')";	
                    data.bombsNumber++;
                } else if (field.className == classNames.fqBomb) {
                    field.className = classNames.fEmpty;
                    field.style.backgroundImage = "URL('dist/field--empty.svg')";
                } else if (field.className == classNames.fqEmpty) {
                    field.className = classNames.fEmpty;
                    field.style.backgroundImage = "URL('dist/field--empty.svg')";
                }
            }
            
            checkScore();
        }
    }
})();

//UI CONTROLLER
const UIController = (function (saperCtrl) {

    const DOMstrings = {
        pTimer: '#timer',
        pBomber: '#bomber',
        btnStart: '.btn--start',
        btnRestart: '.btn--restart',
        inputHeight: '#height',
        inputWidth: '#Width',
        inputMines: '#mines',
        container: '.grid'
    };

    const calculateHeight = function () { 
        let gridSize = 0;

        window.innerWidth > window.innerHeight ? gridSize = window.innerHeight : gridSize = window.innerWidth;
        gridSize = gridSize - document.querySelector("header").offsetHeight - document.querySelector("footer").offsetHeight - 100;

        return gridSize;
    };

    return {
        getDOMstrings: function() {
            return DOMstrings;
        },

        showGrid: function(gridWidth, gridHeight) {
            let containerHeight = calculateHeight();
            let containerWidth;
            let containerSize; //Smaller dimension to get values for single field
            let x; //Number of fields
            
            if(gridHeight > gridWidth) {
                x = gridHeight;
                containerWidth = ((containerHeight / x) * gridHeight);
                containerHeight = ((containerHeight / x) * gridWidth);
                containerSize = containerWidth;

            } else {
                x = gridWidth;
                containerWidth = ((containerHeight / gridWidth) * gridHeight);
                containerSize = containerHeight;
            }

            const grid = document.querySelector(DOMstrings.container);
            grid.style.height = containerHeight + "px";
            grid.style.width =  containerWidth + "px";            

            for (let i = 0; i < gridWidth; i++) {
                for (let j = 0; j < gridHeight; j++) {
                    const field = document.createElement("div");
                    grid.appendChild(field);
                    field.style.position = "absolute";
                    field.style.left = j * containerSize / x + "px";
                    field.style.top = i * containerSize / x + "px";						
                    field.style.height = containerSize / x + "px";
                    field.style.width = containerSize / x + "px";
                    field.style.lineHeight = containerSize / x + "px";
                    field.style.textAlign ="center";
                    field.className = saperCtrl.getclassNames().fEmpty;
                    field.innerHTML = 0;						

                    if (!saperCtrl.getData().tab[i]) { 
                        saperCtrl.getData().tab[i] = []; 
                    }
                    
                    saperCtrl.getData().tab[i][j] = field;
                }
            }
        },

        //Update grid and inside fields on resize event
        updateGrid: function (gridWidth, gridHeight) {
            let containerHeight = calculateHeight();
            let containerWidth;
            let containerSize;
            let x;

            if(gridHeight > gridWidth) {
                x = gridHeight;
                containerWidth = ((containerHeight / x) * gridHeight);
                containerHeight = ((containerHeight / x) * gridWidth);
                containerSize = containerWidth;

            } else {
                x = gridWidth;
                containerWidth = ((containerHeight / gridWidth) * gridHeight);
                containerSize = containerHeight;
            }
        
            const grid = document.querySelector(DOMstrings.container);
            grid.style.height = containerHeight + "px";
            grid.style.width =  containerWidth + "px";   

            for (let i = 0; i < gridWidth; i++) {
                for (let j = 0; j < gridHeight; j++) {
                    const field = saperCtrl.getData().tab[i][j];
                    field.style.left = j * containerSize / x + "px";
                    field.style.top = i * containerSize / x + "px";						
                    field.style.height = containerSize / x + "px";
                    field.style.width = containerSize / x + "px";
                    field.style.lineHeight = containerSize / x + "px";
                    if(parseInt(field.innerHTML) > 0 && field.className == saperCtrl.getclassNames().fClear) {
                        field.style.fontSize = (containerSize / x) * 0.75 + "px";
                    }
                }
            }
        },
    }
})(saperController);

//GLOBAL APP CONTROLLER
const controller = (function (saperCtrl, UICtrl) {

    let gameInProgress = false;

    const setupEventListeners = function () {
        const DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.btnStart).addEventListener('click', () => {
            if (!gameInProgress) {

                saperCtrl.setData();

                if (saperCtrl.checkData() == 0) {
                    let time = 0;
                    gameInProgress = true;
                    document.querySelector(DOM.btnStart).disabled = true;
                    startGame();

                    setInterval(function() {
                        document.querySelector(DOM.pTimer).innerHTML = time++;			
                    }, 1000);

                    document.querySelector(DOM.pBomber).innerHTML = saperCtrl.getData().bombsNumber;
                    document.querySelector(DOM.btnStart).classList = "btn btn--disabled";

                    window.addEventListener('resize', () => UICtrl.updateGrid(saperCtrl.getData().gridWidth, saperCtrl.getData().gridHeight));
                } else if (saperCtrl.checkData() == -2) {
                    alert("You cannot play on grid with that size! Each dimension have to be between 2 and 99...");
                } else {
                    alert("You cannot plant so many bombs! Number of bombs have to be lesser than Width*Height...");
                }
            }
        });

        document.querySelector(DOM.btnRestart).addEventListener('click', () => { location.reload() });

        document.addEventListener('contextmenu', event => event.preventDefault());

        document.querySelector(DOM.container).addEventListener("mousedown", (event) => { 
            saperCtrl.clickField(event);
            document.querySelector(DOM.pBomber).innerHTML = saperCtrl.getData().bombsNumber;
        });	
    };

    const startGame = function () {	
        UICtrl.showGrid(saperCtrl.getData().gridWidth, saperCtrl.getData().gridHeight);
    };

    return {
        init: function() {
            setupEventListeners();
        }
    }
})(saperController, UIController);

controller.init();