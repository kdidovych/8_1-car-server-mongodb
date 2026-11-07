const TYPES = [
    {_id: '65f000000000000000000001', name: 'грузовые'},
    {_id: '65f000000000000000000002', name: 'легковые'},
    {_id: '65f000000000000000000003', name: 'джипы'},
    {_id: '65f000000000000000000004', name: 'кроссоверы'},
    {_id: '65f000000000000000000005', name: 'спортивные'},
    {_id: '65f000000000000000000006', name: 'военные'},
    {_id: '65f000000000000000000007', name: 'концепты'}
];

const CARS = [
    {
        brand: 'КАМАЗ',
        model: '54901',
        year: 2024,
        color: 'белый',
        engine_type: 'Дизельный',
        bodywork_type: 'Седельный тягач',
        gear_type: 'Автоматическая',
        new: true,
        typeId: '65f000000000000000000001'
    },
    {
        brand: 'Volvo',
        model: 'FH16',
        year: 2023,
        color: 'синий',
        engine_type: 'Дизельный',
        bodywork_type: 'Седельный тягач',
        gear_type: 'Автоматическая',
        new: true,
        typeId: '65f000000000000000000001'
    },
    {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'черный',
        engine_type: 'Бензиновый',
        bodywork_type: 'Седан',
        gear_type: 'Автоматическая',
        new: false,
        typeId: '65f000000000000000000002'
    },
    {
        brand: 'BMW',
        model: '3 Series',
        year: 2021,
        color: 'серый',
        engine_type: 'Бензиновый',
        bodywork_type: 'Седан',
        gear_type: 'Автоматическая',
        new: true,
        typeId: '65f000000000000000000002'
    },
    {
        brand: 'LADA',
        model: 'Vesta',
        year: 2023,
        color: 'белый',
        engine_type: 'Бензиновый',
        bodywork_type: 'Седан',
        gear_type: 'Механическая',
        new: true,
        typeId: '65f000000000000000000002'
    },
    {
        brand: 'Hyundai',
        model: 'Solaris',
        year: 2020,
        color: 'серебристый',
        engine_type: 'Бензиновый',
        bodywork_type: 'Хэтчбек',
        gear_type: 'Автоматическая',
        new: true,
        typeId: '65f000000000000000000002'
    },
    {
        brand: 'Toyota',
        model: 'Land Cruiser 300',
        year: 2024,
        color: 'черный',
        engine_type: 'Дизельный',
        bodywork_type: 'Внедорожник',
        gear_type: 'Автоматическая',
        new: true,
        typeId: '65f000000000000000000003'
    },
    {
        brand: 'Jeep',
        model: 'Wrangler',
        year: 2022,
        color: 'зеленый',
        engine_type: 'Бензиновый',
        bodywork_type: 'Внедорожник',
        gear_type: 'Автоматическая',
        new: true,
        typeId: '65f000000000000000000003'
    },
    {
        brand: 'Toyota',
        model: 'RAV4',
        year: 2023,
        color: 'красный',
        engine_type: 'Гибридный',
        bodywork_type: 'Кроссовер',
        gear_type: 'Вариатор',
        new: true,
        typeId: '65f000000000000000000004'
    },
    {
        brand: 'Kia',
        model: 'Sportage',
        year: 2024,
        color: 'синий',
        engine_type: 'Бензиновый',
        bodywork_type: 'Кроссовер',
        gear_type: 'Автоматическая',
        new: true,
        typeId: '65f000000000000000000004'
    },
    {
        brand: 'Porsche',
        model: '911 Carrera',
        year: 2024,
        color: 'желтый',
        engine_type: 'Бензиновый',
        bodywork_type: 'Купе',
        gear_type: 'Автоматическая',
        new: true,
        typeId: '65f000000000000000000005'
    },
    {
        brand: 'Nissan',
        model: 'GT-R',
        year: 2021,
        color: 'серый',
        engine_type: 'Бензиновый',
        bodywork_type: 'Купе',
        gear_type: 'Автоматическая',
        new: true,
        typeId: '65f000000000000000000005'
    },
    {
        brand: 'AM General',
        model: 'HMMWV',
        year: 2018,
        color: 'песочный',
        engine_type: 'Дизельный',
        bodywork_type: 'Военный внедорожник',
        gear_type: 'Автоматическая',
        new: false,
        typeId: '65f000000000000000000006'
    },
    {
        brand: 'Mercedes-Benz',
        model: 'Vision AVTR',
        year: 2020,
        color: 'серебристый',
        engine_type: 'Электрический',
        bodywork_type: 'Концепт-кар',
        gear_type: 'Автоматическая',
        new: false,
        typeId: '65f000000000000000000007'
    },
    {
        brand: 'BMW',
        model: 'GINA Light Visionary Model',
        year: 2008,
        color: 'серебристый',
        engine_type: 'Бензиновый',
        bodywork_type: 'Концепт-кар',
        gear_type: 'Автоматическая',
        new: false,
        typeId: '65f000000000000000000007'
    }
];

module.exports = {TYPES, CARS};
