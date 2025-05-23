from flask import Flask, render_template_string, send_from_directory

app = Flask(__name__, static_folder='.', static_url_path='')

# Read the HTML file as a template string
with open('templates/index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

with open('templates/sairam_tech.html', 'r', encoding='utf-8') as f:
    sairam_tech_content = f.read()

with open('templates/saira-enterprises.html', 'r', encoding='utf-8') as f:
    saira_enterprises_content = f.read()

@app.route('/')
def home():
    return render_template_string(html_content)

@app.route('/sairam_tech')
def sairam_tech():
    return render_template_string(sairam_tech_content)

@app.route('/styles.css')
def styles():
    return send_from_directory('.', 'styles.css')

@app.route('/sairam_tech.css')
def sairam_tech_css():
    return send_from_directory('static', 'sairam_tech.css')

@app.route('/saira_enterprises')
def saira_enterprises():
    return render_template_string(saira_enterprises_content)
