from flask import Flask, render_template, request, jsonify,json
import requests
import random

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route('/api/get-lucky-num', methods=['POST'])
# API that integrates the Numbers API. User does a POST request with json in following format:
# {
# 	"name":"steph",
# 	"color":"red",
# 	"year":"1990",
# 	"email":"test"
# }
# Will return random fact about year and a random number fact.

def get_lucky_num():
    colors = ['red','blue','green','orange']
    errors = {'color':["Invalid input, must be one of: red, blue, green or orange"], 
              'name':['This field is required'],
              'email': ['This field is required'],
              'year':['Invalid input, must be between 1900 and 2000 inclusive']}
    
    info = request.json
    year = int(info['year'])
    rand_int = random.randint(1,100)
    api_url = 'http://numbersapi.com'
        
    if info.get('color', None) not in colors or not info.get('name',None) or not info.get('email', None) or int(info.get('year',None)) not in range(1900, 2001):
        return jsonify(errors=errors)

    res_int = requests.get(f'{api_url}/{rand_int}')
    res_year = requests.get(f'{api_url}/{year}/year')
    text_int = {"fact":res_int.text, "num":rand_int}
    text_year = {"fact":res_year.text, "year":year}

   
    return jsonify(num = text_int, year = text_year)



   
    
    
    
    
    
