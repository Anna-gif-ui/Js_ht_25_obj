(function () {
    'use strict'
    let dreamCar = {
        producer: 'Tesla',
        model: 'S 75D',
        year: 2012,
        speed: 235,
    }

    let display

    for (display in dreamCar){
	    document.write(`<h2>${display} : ${dreamCar[display]} <br/></h2>`)
    }

    let distance
    do {
        distance = +prompt(`Введите расстояние в км, которое вы хотите проехать на автомобиле ${dreamCar.producer} ${dreamCar.model}: `)
     } while(isNaN(distance))
     distance = Math.abs(distance)

    
    let time =  (distance / dreamCar.speed)

    if (time % 4 > 0 || time == 0)
        time +=  Math.floor(time / 4)  
    else
        time +=  (time / 4 - 1)

    document.write(`Чтобы преодолеть расстояние ${distance}км на ${dreamCar.producer} ${dreamCar.model} Вам понадобится ${time.toFixed(2)} ч`); 

 })()

