/*сортировка.
рассмотрим ситуацию, когда все карточки образуют корректную связную цепочку.
в этом случае начальная точка не является конечной точкой ни одной другой карточки
та же ситуация и с конечной точкой, в связи с чем их легко определить.
затем создаем 2 объекта. в первом ключами являются пункты отправления, а значениями карточки.
во втором ключи - пункты назначения.
зная начальную и конечную точки, находим маршрут.

*/


function sort(data) {
    if (!(data instanceof Array)) {
        alert("Not array");
    }
    
    var departure = {};
    var destination = {};
    var sorted = {};
    var firstLast = {};
    
    data.forEach(card => {
        if(!("from" in card) || !("to" in card)) {
            alert("Not enough data")
        }
            
        departure[card.from] = card;
        destination[card.to] = card;
    });
    
    /*нахождение начального и конечного пункта маршрута.
    ошибка, если мест, подходящих под условие более одного*/
    data.forEach(card => {
        if(!(card.from in destination)){
            if(!("start" in firstLast)) {
                firstLast.start = card.from;
            }
//TODO! это надо проверять на этапе добавления в хеш таблицу. придумать, что делать с вариантом, когда финиш - одна из предыдущих точек маршрута
            else {
                alert("Error! Not a chain");
            }
            //alert("start " + card.from);
        }
        if(!(card.to in departure)) {
            if(!("finish" in firstLast)) {
                firstLast.finish = card.to;
            }
            else {
                alert("Error! Not a chain");
            }
            //alert("finish " + card.to);
        }
    });
    
    var tmp = firstLast.start;
    if(!("finish" in firstLast) && !("start" in firstLast)) {
        tmp = data[0].from;
    }
    
    for (i = 0; i < data.length; i++) {
        sorted[i] = departure[tmp];
        tmp = sorted[i].to;
        //alert(tmp);
    }
    
    return sorted;    
}



   