/*
корректный тестовый набор карточек.

Маршрут:
Botanicheskaya st
Avtovo
Moskovskaya
Pulkovo
Krasnoyarsk
*/
dataExample = [
        
    {
        from: "Avtovo",
        to: "Moskovskaya",
        type: "metro",
        other: {
        }
    },
    {
        from: "Pulkovo",
        to: "Krasnoyarsk",
        type: "plane",
        other: {
            name: "SU1485",
            gate: "d17",
            baggage: "313"
        }
    },
    {
        from: "Moskovskaya",
        to: "Pulkovo",
        type: "bus",
        other: {
            name: "210"
        }
    },
    {
        from: "Botanicheskaya st",
        to: "Avtovo",
        type: "bus",
        other: {
            name: "210"
        }
    }
    
];

/*
корректный тестовый набор карточек, образующих замкнутый цикл.
В этом случае алгоритм может выбрать любую из карточек в качестве первой.

Маршрут:
Botanicheskaya st
Avtovo
Moskovskaya
Pulkovo
Krasnoyarsk
Botanicheskaya st...
*/
dataLooped = [
    {
        from: "Pulkovo",
        to: "Krasnoyarsk",
        type: "plane",
        other: {
            name: "SU1485",
            gate: "d17",
            baggage: "313"
        }
    },
    {
        from: "Botanicheskaya st",
        to: "Avtovo",
        type: "bus",
        other: {
            name: "210"
        }
    },
    
    {
        from: "Moskovskaya",
        to: "Pulkovo",
        type: "bus",
        other: {
            name: "210"
        }
    },
    {
        from: "Avtovo",
        to: "Moskovskaya",
        type: "metro",
        other: {
        }
    },
    
    {
        from: "Krasnoyarsk",
        to: "Botanicheskaya st.",
        type: "taxi",
        other: {
            info: "mazda demio x200ec124"
        }
    }
    
];

/*некорректные данные.
пункты назначения не образуют замкнутой цепочки*/
dataNoChain = [
        {
        from: "Botanicheskaya st",
        to: "Avtovo",
        type: "bus",
        other: {
            name: "210"
        }
    },
    {
        from: "Moskovskaya",
        to: "Pulkovo",
        type: "bus",
        other: {
            name: "210"
        }
    },
     {
        from: "Avtovo",
        to: "Moskovskaya",
        type: "metro",
        other: {
        }
    },
    {
        from: "Krasnoyarsk",
        to: "Botanicheskaya st.",
        type: "taxi",
        other: {
            info: "mazda demio x200ec124"
        }
    }
];

/* неправильный формат входных данных.
ожидается массив, получено число. */

dataWrongFormat = 15;

/*неправильный формат.
в одной из карточек отсутствует обязательный параметр "to"*/
dataNotEnoughParam = [
        {
        from: "Botanicheskaya st",
        to: "Avtovo",
        type: "bus",
        other: {
            name: "210"
        }
    },
    {
        from: "Avtovo",
        type: "metro",
        other: {
        }
    }
];

/*неправильный формат.
место отправления не должно совпадать с пунктом назначения*/
dataOnePoint = [
        {
        from: "Botanicheskaya st",
        to: "Avtovo",
        type: "bus",
        other: {
            name: "210"
        }
    },
    {
        from: "Avtovo",
        to: "Avtovo",
        type: "metro",
        other: {
        }
    }
];

/*еще нужен вариант с циклом, но где первая точка не совпадает с последней. 
потом напишу.*/