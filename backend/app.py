from flask import Flask, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app) 


def collatz_sequence(n):
    if not isinstance(n, int) or n <= 0:
        raise ValueError("El número debe ser un entero positivo.")

    sequence = [n]
    while n != 1:
        if n % 2 == 0:  # Es par
            n //= 2
        else:  # Es impar
            n = 3 * n + 1
        sequence.append(n)
    return sequence

# Endpoint REST para la Conjetura de Collatz
@app.route('/collatz/<int:n>', methods=['GET'])
def get_collatz_sequence(n):
    try:
        sequence = collatz_sequence(n)
        return jsonify({"sequence": sequence})
    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": "Ocurrió un error inesperado: " + str(e)}), 500


if __name__ == '__main__':
  
    app.run(host='0.0.0.0', port=5001, debug=True)