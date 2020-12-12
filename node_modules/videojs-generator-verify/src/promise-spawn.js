const childProcess = require('child_process');

const promiseSpawn = function(bin, args, options = {}) {
  process.setMaxListeners(1000);

  return new Promise((resolve, reject) => {
    const child = childProcess.spawn(bin, args, options);

    let stdout = '';
    let stderr = '';
    let out = '';

    child.stdout.on('data', function(chunk) {
      stdout += chunk;
      out += chunk;
    });

    child.stderr.on('data', function(chunk) {
      stderr += chunk;
      out += chunk;
    });

    const kill = () => child.kill();

    process.on('SIGINT', kill);
    process.on('SIGQUIT', kill);
    process.on('exit', kill);

    child.on('close', (status) => resolve({
      status,
      out: out.toString(),
      stderr: stderr.toString(),
      stdout: stdout.toString()
    }));
  });
};

module.exports = promiseSpawn;
