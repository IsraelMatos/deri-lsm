<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
   xmlns:uuid="uuid"
   xmlns:fn="http://www.w3.org/2005/xpath-functions"
   xmlns:xs = "http://www.w3.org/2001/XMLSchema"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0"
   xmlns:yweather="http://xml.weather.yahoo.com/ns/rss/1.0">
	<xsl:output method="text" media-type="text/plain"/>
	
	<xsl:variable name="utc-timestamp" select="current-dateTime()"/>
	<xsl:variable name="observationId" select="uuid:generateID()"/>
	<xsl:param name="sensorId"/>
	<xsl:param name="sensorName"/>
	<xsl:param name="foi"></xsl:param>
		
	<xsl:template match="/">
		<xsl:apply-templates select="stations"/>
	</xsl:template>
	<xsl:template match="stations">			
		<xsl:call-template name="generateObservation">
			<xsl:with-param name="sensorId" select="concat('http://lsm.deri.ie/resource/',$sensorId)"/>
		</xsl:call-template>		
		<xsl:for-each select="station">			
			<xsl:if test="name =  $sensorName">		
				<xsl:call-template name="hasUnit">
					<xsl:with-param name="name" select="'BikeAvailability'"/>
					<xsl:with-param name="value" select="nbBikes" />
					<xsl:with-param name="unit" select="'bike'" />
				</xsl:call-template>
				<xsl:call-template name="hasUnit">
					<xsl:with-param name="name" select="'BikeDockAvailability'"/>
					<xsl:with-param name="value" select="nbDocks" />
					<xsl:with-param name="unit" select="'dock'" />
				</xsl:call-template>
			</xsl:if>
		</xsl:for-each>
		
	</xsl:template>
	
	<xsl:template name="generateObservation">
		<xsl:param name="sensorId"/>
<!-- 		<xsl:param name="observationId"/> -->
		<xsl:value-of select="concat('&#10;','&#60;','http://lsm.deri.ie/resource/',$observationId,'&#62; ',
	    			'&#60;','http://www.w3.org/1999/02/22-rdf-syntax-ns#type','&#62; ',
	    			'&#60;','http://purl.oclc.org/NET/ssnx/ssn#Observation','&#62;.'),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$observationId,'&#62; ',
	    			'&#60;','http://purl.oclc.org/NET/ssnx/ssn#observedBy','&#62;',' &#60;',$sensorId,'&#62;.'),	    			
	    			concat('&#60;','http://lsm.deri.ie/resource/',$observationId,'&#62; ',
	    			'&#60;','http://purl.oclc.org/NET/ssnx/ssn#observationResultTime','&#62;',' &#34;',$utc-timestamp,'&#34;&#94;&#94;&#60;','http://www.w3.org/2001/XMLSchema#dateTime&#62;.'),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$observationId,'&#62; ',
	    			'&#60;','http://purl.oclc.org/NET/ssnx/ssn#featureOfInterest','&#62;',' &#60;','http://lsm.deri.ie/resource/',$foi,'&#62;.')
           			" separator="&#10;"/>
	</xsl:template>

	
	<xsl:template name="hasUnit">
		<xsl:param name="name"/>
		<xsl:param name="value"/>		
		<xsl:param name="unit"/>
		<xsl:variable name ="realvalue">
		  <xsl:choose>
		     <xsl:when test ="$value!=''">
		      <xsl:value-of select ="$value"/> 
		     </xsl:when>
		     <xsl:otherwise>-999</xsl:otherwise>
		  </xsl:choose>
   		</xsl:variable>
		<xsl:variable name="tempid" select="uuid:generateID()"/>
		<xsl:variable name="classURL" select="document('observedproperty.xml')/Root/items/item[name=$name]/class"/>
		<xsl:variable name="observedId" select="document('observedproperty.xml')/Root/items/item[name=$name]/url"/>
	    <xsl:value-of select="concat('&#10;','&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://www.w3.org/1999/02/22-rdf-syntax-ns#type','&#62; ','&#60;',$classURL,'&#62;. '),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://lsm.deri.ie/ont/lsm.owl#isObservedPropertyOf','&#62; ','&#60;',
	    			'http://lsm.deri.ie/resource/',$observationId,'&#62;.'),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://lsm.deri.ie/ont/lsm.owl#value','&#62;',' &#34;',$realvalue,'&#34;&#94;&#94;&#60;','http://www.w3.org/2001/XMLSchema#double&#62;.'),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://lsm.deri.ie/ont/lsm.owl#unit','&#62; ','&#34;',$unit,'&#34;.'),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://purl.oclc.org/NET/ssnx/ssn#observedProperty','&#62; ','&#60;',$observedId,'&#62;.'),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://purl.oclc.org/NET/ssnx/ssn#observationResultTime','&#62;',' &#34;',$utc-timestamp,'&#34;&#94;&#94;&#60;','http://www.w3.org/2001/XMLSchema#dateTime&#62;.')
           			" separator="&#10;"/>
	</xsl:template>
	
	<xsl:template name="noUnit">
		<xsl:param name="name"/>
		<xsl:param name="value"/>
		<xsl:variable name="tempid" select="uuid:generateID()"/>
		<xsl:variable name="classURL" select="document('observedproperty.xml')/Root/items/item[name=$name]/class"/>
		<xsl:variable name="observedId" select="document('observedproperty.xml')/Root/items/item[name=$name]/url"/>
	    <xsl:value-of select="concat('&#10;','&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://www.w3.org/1999/02/22-rdf-syntax-ns#type','&#62; ','&#60;',$classURL,'&#62;. '),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://lsm.deri.ie/ont/lsm.owl#isObservedPropertyOf','&#62; ','&#60;',
	    			'http://lsm.deri.ie/resource/',$observationId,'&#62;.'),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://lsm.deri.ie/ont/lsm.owl#value','&#62;',' &#34;',$value,'&#34;.'),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://purl.oclc.org/NET/ssnx/ssn#observedProperty','&#62; ','&#60;',$observedId,'&#62;.'),
	    			concat('&#60;','http://lsm.deri.ie/resource/',$tempid,'&#62; ',
	    			'&#60;','http://purl.oclc.org/NET/ssnx/ssn#observationResultTime','&#62;',' &#34;',$utc-timestamp,'&#34;&#94;&#94;&#60;','http://www.w3.org/2001/XMLSchema#dateTime&#62;.')
           			" separator="&#10;"/>
	</xsl:template>
	
	<xsl:function name="uuid:generateID">
       <!-- generate unique ID -->
       <xsl:variable name="duration-from-1582" as="xs:dayTimeDuration" >
           <xsl:sequence select="current-dateTime() - xs:dateTime('1582-10-15T00:00:00.000Z')" />
       </xsl:variable> 
        <xsl:variable name="random-offset" as="xs:integer">
           <xsl:sequence select="uuid:next-nr() mod 10000"></xsl:sequence>
       </xsl:variable>
       <!--<xsl:value-of select="concat(format-dateTime(current-dateTime(), '[M01][D01][Y0001][H01][m01][s01][f001]'),$random-offset)"/> 
        do the math to get the 100 nano second intervals -->  
       <!-- do the math to get the 100 nano second intervals -->
       <xsl:sequence select="concat(
           (days-from-duration($duration-from-1582) * 24 * 60 * 60 +
           hours-from-duration($duration-from-1582) * 60 * 60 +
           minutes-from-duration($duration-from-1582) * 60 +
           seconds-from-duration($duration-from-1582)) * 1000 * 10000 +
			$random-offset, uuid:get-id())" />  
   </xsl:function>
   <xsl:function name="uuid:next-nr" as="xs:integer">
       <xsl:variable name="node"><xsl:comment /></xsl:variable>
       <xsl:sequence select="xs:integer(replace(generate-id($node),
'\D', ''))" />
   </xsl:function>
   <!-- generates some kind of unique id -->
   <xsl:function name="uuid:get-id" as="xs:string">
       <xsl:sequence select="generate-id(uuid:_get-node())" />
   </xsl:function>
   <xsl:function name="uuid:_get-node"><xsl:comment /></xsl:function>
</xsl:stylesheet>
