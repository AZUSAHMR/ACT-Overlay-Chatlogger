function getColor(type){
	if(type==24)
	    return "colorFC";

        // ���� Ŀ���͸���¡
	else if (type == 17) 
	    return "colorLS2";
	else if (type >= 18 && type <= 20)
	    return "colorLSHunt";

	else if(type>=16&&type<=23)
		return "colorLS";
	else if(type==45||type==173||type==75||type==27)
		return "colorLS";
	else if(type==68||type==61)
		return "colorMob";
	else if(type==14)
		return "colorParty";
	else if(type==28||type==29)
		return "colorEmo";
	else if(type==57||type==72||type==185||type==59||type==42||type==58||type==170||type==186||type==76||type==56||type==71||type==73||type==201)
		return "colorSys";
	else if(type==60)
		return "colorErr";
	else if(type==65)
		return "colorItem";
	else if(type==62||type==43||type==44||type==171||type==172||type==190)
		return "colorGet";
	else if(type==64)
		return "colorExp";
	else if(type==3)
		return "colorNotice";
	else if(type==11)
		return "colorShout";
	else if(type==12||type==13)
		return "colorWhisper";
	else if(type==10)
		return "colorSay";
	else if(type==66||type==67||type==194||type==195)
		return "colorCraft";
	else if(type==30)
		return "colorYell";
	else if(type==69||type==70)
		return "colorFCNotice";
	else if(type==41||type==169)
		return "colorDamage";
	else if(type==47||type==49||type==175||type==177)
		return "colorDebuff";
	else if(type==46||type==48||type==174||type==176)
		return "colorBuff";
	else if(type==15)
		return "colorAli";
	else if(type==74)
		return "colorDice";
	return "colorUnknown";
}