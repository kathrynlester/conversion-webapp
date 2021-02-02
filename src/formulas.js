export const formulas = {
    'volume': {
        'tsp': {
            'tbsp': 0.333333,
            'floz': 0.166667,
            'cup': 0.0205372,
            'pint': 0.0104167,
            'quart': 0.00520833,
            'gallon': 0.00130208,
            'l': 0.00492892,
            'ml': 4.92892,
        },
        'tbsp': {
            'tsp': 3,
            'floz': 0.5,
            'cup': 0.0616115,
            'pint': 0.03125,
            'quart': 0.015625,
            'gallon': 0.00390625,
            'l': 0.0147868,
            'ml': 14.7868,
        },
        'floz': {
            'tsp': 6,
            'tbsp': 2,
            'cup': 0.123223,
            'pint': 0.0625,
            'quart': 0.03125,
            'gallon': 0.0078125,
            'l': 0.0295735,
            'ml': 29.5735,
        },
        'cup': {
            'tsp': 48,
            'tbsp': 16,
            'floz': 8,
            'pint': 0.5,
            'quart': 0.25,
            'gallon': 0.0625,
            'l': 0.236588,
            'ml': 236.588,
        },
        'pint': {
            'tsp': 96,
            'tbsp': 32,
            'floz': 16,
            'cup': 1.97157,
            'quart': 0.5,
            'gallon': 0.125,
            'l': 0.473176,
            'ml': 473.176,
        },
        'quart': {
            'tsp': 192,
            'tbsp': 64,
            'floz': 32,
            'cup': 3.94314,
            'pint': 2,
            'gallon': 0.25,
            'l': 0.946353,
            'ml': 946.353,
        },
        'gallon': {
            'tsp': 768,
            'tbsp': 256,
            'floz': 128,
            'cup': 15.7725,
            'pint': 8,
            'quart': 4,
            'l': 3.78541,
            'ml': 3785.41,
        },
        'l': {
            'tsp': 202.884,
            'tbsp': 67.628,
            'floz': 33.814,
            'cup': 4.16667,
            'pint': 2.11338,
            'quart': 1.05669,
            'gallon': 0.264172,
            'ml': 1000,
        },
        'ml': {
            'tsp': 0.202884,
            'tbsp': 0.067628,
            'floz': 0.033814,
            'cup': 0.00416667,
            'pint': 0.00211338,
            'quart': 0.00105669,
            'gallon': 0.000264172,
            'l': 0.001,
        },
    },
    "weight": {
        'g': {
            'mg': 100,
            'oz': 0.035274,
            'lb': 0.00220462
        },
        'mg': {
            'g': 0.001,
            'oz': 0.000035274,
            'lb': 0.0000022046
        },
        'oz': {
            'g': 28.3495,
            'mg': 28349.5,
            'lb': 0.0625
        },
        'lb': {
            'g': 453.592,
            'mg': 453592,
            'oz': 16,
        }
    },
    'temperature': {
        'fahrenheit': {
            'fC': (f) => ((f - 32) * 5) / 9
        },
        'celsius': {
            'cF': (c) => ((c / 5) * 9) + 32
        }
    }
};



