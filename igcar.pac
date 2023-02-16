function FindProxyForURL(url, host){
if (isPlainHostName(host) || dnsDomainIs(host, ".igcar.gov.in") || dnsDomainIs(host, ".anunet.in") || shExpMatch(host, "172.16.21.*") || shExpMatch(host, "10.1.1.*") || shExpMatch(host, "127.0.0.*") || dnsDomainIs(host, "wsus.vdidom.gov.in") || shExpMatch(host, "10.24.1.*") || shExpMatch(host, "10.27.1.*") || shExpMatch(host, "10.7.1.*") ) {
    return "DIRECT";
}
return "PROXY proxy.igcar.gov.in:3128";
}
