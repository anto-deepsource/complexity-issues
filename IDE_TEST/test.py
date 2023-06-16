import hashlib
import Crypto

m1 = hashlib.md5() # Insecure, Use of MD5
m2 = hashlib.sha1() # Insecure, Use of SHA1
m3 = Crypto.Hash.MD5.new() # Insecure, Use of MD5
