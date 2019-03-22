import fs from 'fs';
import zlib from 'zlib';

class lab03
{

  syncFileRead(filename)
  {
    var data = fs.readFileSync(filename);
    return data.toString();
  }

  asyncFileRead(filename, callback)
  {
    fs.readFile(filename,"utf8", function (err, data)
    {
      if (err) return console.error(err);

      callback(data);
    });
  }

  compressFileStream(inputFile, outputFile)
  {
    var ret = fs.createWriteStream(outputFile);

    fs.createReadStream(inputFile)
      .pipe(zlib.createGzip())
      .pipe(ret);


    console.log("File Compressed.");

    return ret;
  }

  decompressFileStream(inputFile, outputFile)
  {
    var ret = fs.createWriteStream(outputFile);

    fs.createReadStream(inputFile)
      .pipe(zlib.createGunzip())
      .pipe(ret);

    return ret;
  }

  listDirectoryContents(dirName, callback)
  {
    var dirContents = [];

    fs.readdir(dirName,function(err, files)
    {
      if (err)
      {
        return console.error(err);
      }
      return callback(files);
    });

  }

}

export {lab03};
