let status = "SAFE";
const packet = ["normal", "empty", "MALWARE"];

function scanPackets(){
    for(let i=0 ; i < packet.length; i++){
        if(packet[i] == "empty"){
            console.log("Empty packet, skipping.")
            continue;
        }
        else if(packet[i] == "normal"){
            console.log("normal packet, skipping.")
        }
        else {
            status = "DANGER"
            console.log("ATTENTION!! MALWARE.");
            break;
        }
    }
}

scanPackets();