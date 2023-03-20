<h1 align="center">
  MS Database full application
 </h1>

If you came from [this repo](https://github.com/RodrigoFreitas-L/ms_database), just follow the steps from there, or the ones below:

Clone [this repository](https://github.com/RodrigoFreitas-L/ms_db) (the same you are right now)
<br>
<br>
Install [Docker Desktop](https://www.docker.com/) or:
<br>
<pre><code>npm install -g docker</code></pre>
Go to the cloned folder
and run one of the following:
<pre><code>docker compose up</code></pre>
<pre><code>docker compose up -d (to start detached from container)</code></pre>
This one in specific build images before starting the containers:
<pre><code>docker compose up --build</code></pre>


Now, to access it, just type in your browser:
<pre><code>localhost:3000</pre></code>

To end the application:
<pre><code>docker compose down</code></pre>
