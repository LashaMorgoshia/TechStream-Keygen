var md5 = require('md5'); // Ensure you have the md5 module

var ver = '14';
var jp = 'wrNpTrgLvA2A';
var date = '1911042048';
var days = '5000';
var last = days + date;

var swid = '17234CF16B3C9F3D77EAEEF4938EB601';

var hash1 = md5(swid + ver);
var hash_jp = md5(days + 'Japan' + swid);
var hash2_jp = md5(jp + date + hash_jp + ver) + last;

var val_jp = hash2_jp.slice(9, 21) + 
             hash2_jp.slice(42, 44) + 
             hash2_jp.slice(33, 34) + 
             hash2_jp.slice(38, 40) + 
             hash2_jp.slice(44, 45) + 
             hash2_jp.slice(36, 38) + 
             hash2_jp.slice(40, 42) + 
             hash2_jp.slice(34, 36) + 
             hash2_jp.slice(21, 27) + 
             hash2_jp.slice(45, 46) + 
             hash2_jp.slice(32, 33) + 
             hash2_jp.slice(0, 9) + 
             hash2_jp.slice(27, 32);

console.log('JP: ' + val_jp);
