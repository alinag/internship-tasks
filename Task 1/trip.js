function Trip(data) {
 
    /*сортировка.
рассмотрим ситуацию, когда все карточки образуют корректную связную цепочку.
в этом случае начальная точка не является конечной точкой ни одной другой карточки
та же ситуация и с конечной точкой, в связи с чем их легко определить.
затем создаем 2 хеш-таблицы. в первой ключами являются пункты отправления, а значениями карточки.
во втором ключи - пункты назначения.
зная начальную и конечную точки, находим маршрут.

*/

    Trip.prototype.sort = function(data) {
        if (!(data instanceof Array)) {
        alert("Not array");
    }
    
    var departure = {};
    var destination = {};
    var sorted = [];
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
//TODO! это надо проверять на этапе добавления в хеш таблицу. 
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
    };
    
    Trip.prototype.alertRoute = function(data) {
        
        data.forEach(card => {
            var sentence = '';
            switch (card.type) {
                case 'plane':
                case 'airplane':
                case 'aircraft':
                   sentence += 'Take flight '
                   break;
                default:
                    sentence += 'Take ' + card.type + ' ';
                    break;
            }
        if (card["other"]["name"]) {
            sentence += card.other.name + ' ';
        }
        sentence += 'from ' + card.from + ' to ' + card.to + '. ';
            
            for(var attr in card.other){
                switch (attr) {
                    case 'name':
                        break;
                    default:
                        if (card.other[attr].length) {
                            sentence += attr + ': ' + card.other[attr] + '. ';
                        }
                        break;
                }
                
      
        }
        alert(sentence);
            
           
        });
    };

}
