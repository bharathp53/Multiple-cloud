from flask import Flask, request, jsonify
app = Flask(__name__)

# Example API endpoint
@app.route('/api/data', methods=['POST'])
def handle_data():
    data = request.json.get('data')
    # Save data to Azure SQL Database or Cosmos DB
    print(f"Data received: {data}")
    return jsonify({"message": "Data processed successfully!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)