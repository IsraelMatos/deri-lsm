NS = function(){
  var impl;
  var ns = [];
  ns["lsm"]	=	"http://lsm.deri.ie/ont/lsm.owl#";  
  ns["dul"]	=	"http://www.loa-cnr.it/ontologies/DUL.owl#";
  ns["yago"]	=	"http://dbpedia.org/class/yago/";
  ns["rdf"]	=	"http://www.w3.org/1999/02/22-rdf-syntax-ns#";
  ns["foaf"]	=	"http://xmlns.com/foaf/0.1/";
  ns["dbp"]	=	"http://dbpedia.org/property/";
  ns["owl"]	=	"http://www.w3.org/2002/07/owl#";
  ns["dc"]	=	"http://purl.org/dc/elements/1.1/";
  ns["dbo"]	=	"http://dbpedia.org/ontology/";
  ns["rdfs"]	=	"http://www.w3.org/2000/01/rdf-schema#";
  ns["sc"]	=	"http://umbel.org/umbel/sc/";
  ns["rss"]	=	"http://purl.org/rss/1.0/";
  ns["fb"]	=	"http://rdf.freebase.com/ns/";
  ns["geonames"]	=	"http://www.geonames.org/ontology#";
  ns["skos"]	=	"http://www.w3.org/2004/02/skos/core#";
  ns["geo"]	=	"http://www.w3.org/2003/01/geo/wgs84_pos#";
  ns["cyc"]	=	"http://sw.opencyc.org/concept/";
  ns["sioc"]	=	"http://rdfs.org/sioc/ns#";
  ns["akt"]	=	"http://www.aktors.org/ontology/portal#";
  ns["dbpedia"]	=	"http://dbpedia.org/resource/";
  ns["admin"]	=	"http://webns.net/mvcb/";
  ns["gr"]	=	"http://purl.org/goodrelations/v1#";
  ns["xsd"]	=	"http://www.w3.org/2001/XMLSchema#";
  ns["swrc"]	=	"http://swrc.ontoware.org/ontology#";
  ns["xhtml"]	=	"http://www.w3.org/1999/xhtml/vocab#";
  ns["dbpprop"]	=	"http://dbpedia.org/property/";
  ns["doap"]	=	"http://usefulinc.com/ns/doap#";
  ns["vcard"]	=	"http://www.w3.org/2006/vcard/ns#";
  ns["dc11"]	=	"http://purl.org/dc/elements/1.1/";
  ns["dcterms"]	=	"http://purl.org/dc/terms/";
  ns["content"]	=	"http://purl.org/rss/1.0/modules/content/";
  ns["bill"]	=	"http://www.rdfabout.com/rdf/schema/usbill/";
  ns["wot"]	=	"http://xmlns.com/wot/0.1/";
  ns["dct"]	=	"http://purl.org/dc/terms/";
  ns["mo"]	=	"http://purl.org/ontology/mo/";
  ns["wn20schema"]	=	"http://www.w3.org/2006/03/wn/wn20/schema/";
  ns["gen"]	=	"http://www.w3.org/2006/gen/ont#";
  ns["void"]	=	"http://rdfs.org/ns/void#";
  ns["d2rq"]	=	"http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#";
  ns["nie"]	=	"http://www.semanticdesktop.org/ontologies/2007/01/19/nie#";
  ns["org"]	=	"http://www.w3.org/ns/org#";
  ns["test2"]	=	"http://this.invalid/test2#";
  ns["rel"]	=	"http://purl.org/vocab/relationship/";
  ns["ex"]	=	"http://example.com/";
  ns["movie"]	=	"http://data.linkedmdb.org/resource/movie/";
  ns["http"]	=	"http://www.w3.org/2006/http#";
  ns["bio"]	=	"http://purl.org/vocab/bio/0.1/";
  ns["dcmit"]	=	"http://purl.org/dc/dcmitype/";
  ns["cc"]	=	"http://creativecommons.org/ns#";
  ns["reco"]	=	"http://purl.org/reco#";
  ns["og"]	=	"http://opengraphprotocol.org/schema/";
  ns["earl"]	=	"http://www.w3.org/ns/earl#";
  ns["xfn"]	=	"http://vocab.sindice.com/xfn#";
  ns["media"]	=	"http://purl.org/media#";
  ns["air"]	=	"http://dig.csail.mit.edu/TAMI/2007/amord/air#";
  ns["ical"]	=	"http://www.w3.org/2002/12/cal/ical#";
  ns["rev"]	=	"http://purl.org/stuff/rev#";
  ns["nfo"]	=	"http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#";
  ns["cv"]	=	"http://rdfs.org/resume-rdf/";
  ns["ac"]	=	"http://umbel.org/umbel/ac/";
  ns["tag"]	=	"http://www.holygoat.co.uk/owl/redwood/0.1/tags/";
  ns["dcq"]	=	"http://purl.org/dc/terms/";
  ns["qb"]	=	"http://purl.org/linked-data/cube#";
  ns["bibo"]	=	"http://purl.org/ontology/bibo/";
  ns["dir"]	=	"http://schemas.talis.com/2005/dir/schema#";
  ns["factbook"]	=	"http://www4.wiwiss.fu-berlin.de/factbook/ns#";
  ns["aiiso"]	=	"http://purl.org/vocab/aiiso/schema#";
  ns["botany"]	=	"http://purl.org/NET/biol/botany#";
  ns["swc"]	=	"http://data.semanticweb.org/ns/swc/ontology#";
  ns["days"]	=	"http://ontologi.es/days#";
  ns["book"]	=	"http://purl.org/NET/book/vocab#";
  ns["vann"]	=	"http://purl.org/vocab/vann/";
  ns["drugbank"]	=	"http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugbank/";
  ns["xf"]	=	"http://www.w3.org/2002/xforms/";
  ns["osag"]	=	"http://www.ordnancesurvey.co.uk/ontology/AdministrativeGeography/v2.0/AdministrativeGeography.rdf#";
  ns["musim"]	=	"http://purl.org/ontology/similarity/";
  ns["cfp"]	=	"http://sw.deri.org/2005/08/conf/cfp.owl#";
  ns["afn"]	=	"http://jena.hpl.hp.com/ARQ/function#";
  ns["sism"]	=	"http://purl.oclc.org/NET/sism/0.1/";
  ns["owlim"]	=	"http://www.ontotext.com/trree/owlim#";
  ns["cld"]	=	"http://purl.org/cld/terms/";
  ns["fn"]	=	"http://www.w3.org/2005/xpath-functions#";
  ns["cs"]	=	"http://purl.org/vocab/changeset/schema#";
  ns["ad"]	=	"http://schemas.talis.com/2005/address/schema#";
  ns["dbr"]	=	"http://dbpedia.org/resource/";
  ns["biblio"]	=	"http://purl.org/net/biblio#";
  ns["event"]	=	"http://purl.org/NET/c4dm/event.owl#";
  ns["sd"]	=	"http://www.w3.org/ns/sparql-service-description#";
  ns["mu"]	=	"http://www.kanzaki.com/ns/music#";
  ns["dv"]	=	"http://rdf.data-vocabulary.org/#";
  ns["dcn"]	=	"http://www.w3.org/2007/uwa/context/deliverycontext.owl#";
  ns["rdfg"]	=	"http://www.w3.org/2004/03/trix/rdfg-1/";
  ns["log"]	=	"http://www.w3.org/2000/10/swap/log#";
  ns["co"]	=	"http://purl.org/ontology/co/core#";
  ns["xhv"]	=	"http://www.w3.org/1999/xhtml/vocab#";
  ns["cal"]	=	"http://www.w3.org/2002/12/cal/ical#";
  ns["memo"]	=	"http://ontologies.smile.deri.ie/2009/02/27/memo#";
  ns["ome"]	=	"http://purl.org/ontomedia/core/expression#";
  ns["xs"]	=	"http://www.w3.org/2001/XMLSchema#";
  ns["af"]	=	"http://purl.org/ontology/af/";
  ns["cmp"]	=	"http://www.ontologydesignpatterns.org/cp/owl/componency.owl#";
  ns["swanq"]	=	"http://purl.org/swan/1.2/qualifiers/";
  ns["ir"]	=	"http://www.ontologydesignpatterns.org/cp/owl/informationrealization.owl#";
  ns["giving"]	=	"http://ontologi.es/giving#";
  ns["akts"]	=	"http://www.aktors.org/ontology/support#";
  ns["lomvoc"]	=	"http://ltsc.ieee.org/rdf/lomv1p0/vocabulary#";
  ns["ctag"]	=	"http://commontag.org/ns#";
  ns["po"]	=	"http://purl.org/ontology/po/";
  ns["rif"]	=	"http://www.w3.org/2007/rif#";
  ns["ok"]	=	"http://okkam.org/terms#";
  ns["swande"]	=	"http://purl.org/swan/1.2/discourse-elements/";
  ns["uniprot"]	=	"http://purl.uniprot.org/core/";
  ns["math"]	=	"http://www.w3.org/2000/10/swap/math#";
  ns["daia"]	=	"http://purl.org/ontology/daia/";
  ns["myspace"]	=	"http://purl.org/ontology/myspace#";
  ns["jdbc"]	=	"http://d2rq.org/terms/jdbc/";
  ns["sr"]	=	"http://www.openrdf.org/config/repository/sail#";
  ns["tzont"]	=	"http://www.w3.org/2006/timezone#";
  ns["sioct"]	=	"http://rdfs.org/sioc/types#";
  ns["daml"]	=	"http://www.daml.org/2001/03/daml+oil#";
  ns["sider"]	=	"http://www4.wiwiss.fu-berlin.de/sider/resource/sider/";
  ns["wo"]	=	"http://purl.org/ontology/wo/";
  ns["commerce"]	=	"http://search.yahoo.com/searchmonkey/commerce/";
  ns["politico"]	=	"http://www.rdfabout.com/rdf/schema/politico/";
  ns["usgov"]	=	"http://www.rdfabout.com/rdf/schema/usgovt/";
  ns["pmlj"]	=	"http://inference-web.org/2.0/pml-justification.owl#";
  ns["lfm"]	=	"http://purl.org/ontology/last-fm/";
  ns["taxo"]	=	"http://purl.org/rss/1.0/modules/taxonomy/";
  ns["vote"]	=	"http://www.rdfabout.com/rdf/schema/vote/";
  ns["frbr"]	=	"http://purl.org/vocab/frbr/core#";
  ns["con"]	=	"http://www.w3.org/2000/10/swap/pim/contact#";
  ns["doac"]	=	"http://ramonantonio.net/doac/0.1/#";
  ns["wn"]	=	"http://xmlns.com/wordnet/1.6/";
  ns["affy"]	=	"http://www.affymetrix.com/community/publications/affymetrix/tmsplice#";
  ns["prv"]	=	"http://purl.org/net/provenance/ns#";
  ns["scot"]	=	"http://scot-project.org/scot/ns#";
  ns["scovo"]	=	"http://purl.org/NET/scovo#";
  ns["rsa"]	=	"http://www.w3.org/ns/auth/rsa#";
  ns["irrl"]	=	"http://www.ontologydesignpatterns.org/cp/owl/informationobjectsandrepresentationlanguages.owl#";
  ns["ov"]	=	"http://open.vocab.org/terms/";
  ns["lgd"]	=	"http://linkedgeodata.org/ontology/";
  ns["nco"]	=	"http://www.semanticdesktop.org/ontologies/2007/03/22/nco#";
  ns["omt"]	=	"http://purl.org/ontomedia/ext/common/trait#";
  ns["wordmap"]	=	"http://purl.org/net/ns/wordmap#";
  ns["lastfm"]	=	"http://purl.org/ontology/last-fm/";
  ns["cert"]	=	"http://www.w3.org/ns/auth/cert#";
  ns["ti"]	=	"http://www.ontologydesignpatterns.org/cp/owl/timeinterval.owl#";
  ns["lode"]	=	"http://linkedevents.org/ontology/";
  ns["user"]	=	"http://schemas.talis.com/2005/user/schema#";
  ns["nao"]	=	"http://www.semanticdesktop.org/ontologies/2007/08/15/nao#";
  ns["dctype"]	=	"http://purl.org/dc/dcmitype/";
  ns["rep"]	=	"http://www.openrdf.org/config/repository#";
  ns["ore"]	=	"http://www.openarchives.org/ore/terms/";
  ns["es"]	=	"http://eulersharp.sourceforge.net/2003/03swap/log-rules#";
  ns["zoology"]	=	"http://purl.org/NET/biol/zoology#";
  ns["money"]	=	"http://purl.org/net/rdf-money/";
  ns["fec"]	=	"http://www.rdfabout.com/rdf/schema/usfec/";
  ns["abc"]	=	"http://www.metadata.net/harmony/ABCSchemaV5Commented.rdf#";
  ns["lx"]	=	"http://purl.org/NET/lx#";
  ns["unit"]	=	"http://qudt.org/vocab/unit#";
  ns["spin"]	=	"http://spinrdf.org/spin#";
  ns["sede"]	=	"http://eventography.org/sede/0.1/";
  ns["omp"]	=	"http://purl.org/ontomedia/ext/common/profession#";
  ns["coref"]	=	"http://www.rkbexplorer.com/ontologies/coref#";
  ns["ecs"]	=	"http://rdf.ecs.soton.ac.uk/ontology/ecs#";
  ns["code"]	=	"http://telegraphis.net/ontology/measurement/code#";
  ns["lang"]	=	"http://ontologi.es/lang/core#";
  ns["spc"]	=	"http://purl.org/ontomedia/core/space#";
  ns["swrl"]	=	"http://www.w3.org/2003/11/swrl#";
  ns["eztag"]	=	"http://ontologies.ezweb.morfeo-project.org/eztag/ns#";
  ns["omb"]	=	"http://purl.org/ontomedia/ext/common/being#";
  ns["os"]	=	"http://www.w3.org/2000/10/swap/os#";
  ns["doc"]	=	"http://www.w3.org/2000/10/swap/pim/doc#";
  ns["atomix"]	=	"http://buzzword.org.uk/rdf/atomix#";
  ns["swrlb"]	=	"http://www.w3.org/2003/11/swrlb#";
  ns["myspo"]	=	"http://purl.org/ontology/myspace#";
  ns["ne"]	=	"http://umbel.org/umbel/ne/";
  ns["hard"]	=	"http://www.w3.org/2007/uwa/context/hardware.owl#";
  ns["java"]	=	"http://www.w3.org/2007/uwa/context/java.owl#";
  ns["omc"]	=	"http://purl.org/ontomedia/ext/common/bestiary#";
  ns["ibis"]	=	"http://purl.org/ibis#";
  ns["vs"]	=	"http://www.w3.org/2003/06/sw-vocab-status/ns#";
  ns["video"]	=	"http://purl.org/media/video#";
  ns["airport"]	=	"http://www.daml.org/2001/10/html/airport-ont#";
  ns["sv"]	=	"http://schemas.talis.com/2005/service/schema#";
  ns["wnschema"]	=	"http://www.cogsci.princeton.edu/~wn/schema/";
  ns["tmo"]	=	"http://www.semanticdesktop.org/ontologies/2008/05/20/tmo#";
  ns["kwijibo"]	=	"http://kwijibo.talis.com/";
  ns["custom"]	=	"http://www.openrdf.org/config/sail/custom#";
  ns["dcam"]	=	"http://purl.org/dc/dcam/";
  ns["nrl"]	=	"http://www.semanticdesktop.org/ontologies/2007/08/15/nrl#";
  ns["acc"]	=	"http://purl.org/NET/acc#";
  ns["protege"]	=	"http://protege.stanford.edu/system#";
  ns["imm"]	=	"http://schemas.microsoft.com/imm/";
  ns["rei"]	=	"http://www.w3.org/2004/06/rei#";
  ns["meta"]	=	"http://www.openrdf.org/rdf/2009/metadata#";
  ns["resex"]	=	"http://resex.rkbexplorer.com/ontologies/resex#";
  ns["xhe"]	=	"http://buzzword.org.uk/rdf/xhtml-elements#";
  ns["h5"]	=	"http://buzzword.org.uk/rdf/h5#";
  ns["powder"]	=	"http://www.w3.org/2007/05/powder#";
  ns["irw"]	=	"http://www.ontologydesignpatterns.org/ont/web/irw.owl#";
  ns["acl"]	=	"http://www.w3.org/ns/auth/acl#";
  ns["ptr"]	=	"http://www.w3.org/2009/pointers#";
  ns["wdrs"]	=	"http://www.w3.org/2007/05/powder-s#";
  ns["sail"]	=	"http://www.openrdf.org/config/sail#";
  ns["mit"]	=	"http://purl.org/ontology/mo/mit#";
  ns["sit"]	=	"http://www.ontologydesignpatterns.org/cp/owl/situation.owl#";
  ns["chord"]	=	"http://purl.org/ontology/chord/";
  ns["oauth"]	=	"http://demiblog.org/vocab/oauth#";
  ns["link"]	=	"http://www.w3.org/2006/link#";
  ns["p3p"]	=	"http://www.w3.org/2002/01/p3prdfv1#";
  ns["ncal"]	=	"http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#";
  ns["phss"]	=	"http://ns.poundhill.com/phss/1.0/";
  ns["space"]	=	"http://purl.org/net/schemas/space/";
  ns["osoc"]	=	"http://web-semantics.org/ns/opensocial#";
  ns["acm"]	=	"http://www.rkbexplorer.com/ontologies/acm#";
  ns["wdr"]	=	"http://www.w3.org/2007/05/powder#";
  ns["lingvoj"]	=	"http://www.lingvoj.org/ontology#";
  ns["trackback"]	=	"http://madskills.com/public/xml/rss/module/trackback/";
  ns["tdb"]	=	"http://jena.hpl.hp.com/2008/tdb#";
  ns["lom"]	=	"http://ltsc.ieee.org/rdf/lomv1p0/lom#";
  ns["net"]	=	"http://www.w3.org/2007/uwa/context/network.owl#";
  ns["iswc"]	=	"http://annotation.semanticweb.org/2004/iswc#";
  ns["hlisting"]	=	"http://sindice.com/hlisting/0.1/";
  ns["prj"]	=	"http://purl.org/stuff/project/";
  ns["common"]	=	"http://www.w3.org/2007/uwa/context/common.owl#";
  ns["umbel"]	=	"http://umbel.org/umbel#";
  ns["dailymed"]	=	"http://www4.wiwiss.fu-berlin.de/dailymed/resource/dailymed/";
  ns["fresnel"]	=	"http://www.w3.org/2004/09/fresnel#";
  ns["tl"]	=	"http://purl.org/NET/c4dm/timeline.owl#";
  ns["swh"]	=	"http://plugin.org.uk/swh-plugins/";
  ns["gold"]	=	"http://purl.org/linguistics/gold/";
  ns["ya"]	=	"http://blogs.yandex.ru/schema/foaf/";
  ns["product"]	=	"http://purl.org/commerce/product#";
  ns["xen"]	=	"http://buzzword.org.uk/rdf/xen#";
  ns["frbre"]	=	"http://purl.org/vocab/frbr/extended#";
  ns["spl"]	=	"http://spinrdf.org/spl#";
  ns["nmo"]	=	"http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#";
  ns["smiley"]	=	"http://www.smileyontology.com/ns#";
  ns["sp"]	=	"http://spinrdf.org/sp#";
  ns["time"]	=	"http://www.w3.org/2006/time#";
  ns["lotico"]	=	"http://www.lotico.com/resource/";
  ns["resist"]	=	"http://www.rkbexplorer.com/ontologies/resist#";
  ns["skosxl"]	=	"http://www.w3.org/2008/05/skos-xl#";
  ns["sdl"]	=	"http://purl.org/vocab/riro/sdl#";
  ns["swandr"]	=	"http://purl.org/swan/1.2/discourse-relationships/";
  ns["courseware"]	=	"http://courseware.rkbexplorer.com/ontologies/courseware#";
  ns["swp"]	=	"http://www.w3.org/2004/03/trix/swp-2/";
  ns["wv"]	=	"http://vocab.org/waiver/terms/";
  ns["soft"]	=	"http://www.w3.org/2007/uwa/context/software.owl#";
  ns["test"]	=	"http://test2.example.com/";
  ns["lt"]	=	"http://diplomski.nelakolundzija.org/LTontology.rdf#";
  ns["tags"]	=	"http://www.holygoat.co.uk/owl/redwood/0.1/tags/";
  ns["nexif"]	=	"http://www.semanticdesktop.org/ontologies/2007/05/10/nexif#";
  ns["ire"]	=	"http://www.ontologydesignpatterns.org/cpont/ire.owl#";
  ns["fed"]	=	"http://www.openrdf.org/config/sail/federation#";
  ns["dcmitype"]	=	"http://purl.org/dc/dcmitype/";
  ns["label"]	=	"http://purl.org/net/vocab/2004/03/label#";
  ns["sesame"]	=	"http://www.openrdf.org/schema/sesame#";
  ns["gpt"]	=	"http://purl.org/vocab/riro/gpt#";
  ns["swanqs"]	=	"http://purl.org/swan/1.2/qualifiers/";
  ns["biol"]	=	"http://purl.org/NET/biol/ns#";
  ns["ddc"]	=	"http://purl.org/NET/decimalised#";
  ns["lifecycle"]	=	"http://purl.org/vocab/lifecycle/schema#";
  ns["omm"]	=	"http://purl.org/ontomedia/core/media#";
  ns["sm"]	=	"http://topbraid.org/sparqlmotion#";
  ns["atom"]	=	"http://www.w3.org/2005/Atom/";
  ns["states"]	=	"http://www.w3.org/2005/07/aaa#";
  ns["dummy"]	=	"http://hello.com/";
  ns["music"]	=	"http://musicontology.com/";
  ns["moat"]	=	"http://moat-project.org/ns#";
  ns["web"]	=	"http://www.w3.org/2007/uwa/context/web.owl#";
  ns["sim"]	=	"http://purl.org/ontology/similarity/";
  ns["ddl"]	=	"http://purl.org/vocab/riro/ddl#";
  ns["loc"]	=	"http://www.w3.org/2007/uwa/context/location.owl#";
  ns["bsbm"]	=	"http://www4.wiwiss.fu-berlin.de/bizer/bsbm/v01/vocabulary/";
  ns["pmt"]	=	"http://tipsy.googlecode.com/svn/trunk/vocab/pmt#";
  ns["pimo"]	=	"http://www.semanticdesktop.org/ontologies/2007/11/01/pimo#";
  ns["doclist"]	=	"http://www.junkwork.net/xml/DocumentList#";
  ns["bio2rdf"]	=	"http://bio2rdf.org/";
  ns["push"]	=	"http://www.w3.org/2007/uwa/context/push.owl#";
  ns["lfn"]	=	"http://www.dotnetrdf.org/leviathan#";
  ns["wgs84"]	=	"http://www.w3.org/2003/01/geo/wgs84_pos#";
  ns["formats"]	=	"http://www.w3.org/ns/formats/";
  ns["dcat"]	=	"http://www.w3.org/ns/dcat#";
  ns["pmlr"]	=	"http://inference-web.org/2.0/pml-relation.owl#";
  ns["list"]	=	"http://www.w3.org/2000/10/swap/list#";
  ns["uri"]	=	"http://purl.org/NET/uri#";
  ns["pr"]	=	"http://ontologi.es/profiling#";
  ns["like"]	=	"http://ontologi.es/like#";
  ns["climb"]	=	"http://climb.dataincubator.org/vocabs/climb/";
  ns["gob"]	=	"http://purl.org/ontology/last-fm/";
  ns["dady"]	=	"http://purl.org/NET/dady#";
  ns["sml"]	=	"http://topbraid.org/sparqlmotionlib#";
  ns["wairole"]	=	"http://www.w3.org/2005/01/wai-rdf/GUIRoleTaxonomy#";
  ns["resource"]	=	"http://purl.org/vocab/resourcelist/schema#";
  ns["xl"]	=	"http://langegger.at/xlwrap/vocab#";
  ns["bibtex"]	=	"http://purl.oclc.org/NET/nknouf/ns/bibtex#";
  ns["contact"]	=	"http://www.w3.org/2000/10/swap/pim/contact#";
  ns["crypto"]	=	"http://www.w3.org/2000/10/swap/crypto#";
  ns["sl"]	=	"http://www.semanlink.net/2001/00/semanlink-schema#";
  ns["qdoslf"]	=	"http://foaf.qdos.com/lastfm/schema/";
  ns["smf"]	=	"http://topbraid.org/sparqlmotionfunctions#";
  ns["wisski"]	=	"http://wiss-ki.eu/";
  ns["am"]	=	"http://vocab.deri.ie/am#";
  ns["conserv"]	=	"http://conserv.deri.ie/ontology#";
  ns["ping"]	=	"http://purl.org/net/pingback/";
  ns["audio"]	=	"http://purl.org/media/audio#";
  ns["scv"]	=	"http://purl.org/NET/scovo#";
  ns["grddl"]	=	"http://www.w3.org/2003/g/data-view#";
  ns["puc"]	=	"http://purl.org/NET/puc#";
  ns["play"]	=	"http://uriplay.org/spec/ontology/#";
  ns["swanpav"]	=	"http://purl.org/swan/1.2/pav/";
  ns["obj"]	=	"http://www.openrdf.org/rdf/2009/object#";
  ns["opm"]	=	"http://openprovenance.org/ontology#";
  ns["osgb"]	=	"http://data.ordnancesurvey.co.uk/id/";
  ns["opensearch"]	=	"http://a9.com/-/spec/opensearch/1.1/";
  ns["urn"]	=	"http://fliqz.com/";
  ns["pmlp"]	=	"http://inference-web.org/2.0/pml-provenance.owl#";
  ns["plink"]	=	"http://buzzword.org.uk/rdf/personal-link-types#";
  ns["cycann"]	=	"http://sw.cyc.com/CycAnnotations_v1#";
  ns["mysql"]	=	"http://web-semantics.org/ns/mysql/";
  ns["psych"]	=	"http://purl.org/vocab/psychometric-profile/";
  ns["imreg"]	=	"http://www.w3.org/2004/02/image-regions#";
  ns["exif"]	=	"http://www.w3.org/2003/12/exif/ns#";
  ns["swanco"]	=	"http://purl.org/swan/1.2/swan-commons/";
  ns["rdfa"]	=	"http://www.w3.org/ns/rdfa#";
  ns["c4n"]	=	"http://vocab.deri.ie/c4n#";
  ns["so"]	=	"http://purl.org/ontology/symbolic-music/";
  ns["dcterm"]	=	"http://purl.org/dc/terms/";
  ns["swanag"]	=	"http://purl.org/swan/1.2/agents/";
  ns["dbpediaowl"]	=	"http://dbpedia.org/ontology/";
  ns["xesam"]	=	"http://freedesktop.org/standards/xesam/1.0/core#";
  ns["sysont"]	=	"http://ns.ontowiki.net/SysOnt/";
  ns["ttl"]	=	"http://www.w3.org/2008/turtle#";
  ns["nid3"]	=	"http://www.semanticdesktop.org/ontologies/2007/05/10/nid3#";
  ns["evset"]	=	"http://dsnotify.org/vocab/eventset/0.1/";
  ns["geographis"]	=	"http://telegraphis.net/ontology/geography/geography#";
  ns["string"]	=	"http://www.w3.org/2000/10/swap/string#";
  ns["xforms"]	=	"http://www.w3.org/2002/xforms/";
  ns["profiling"]	=	"http://ontologi.es/profiling#";
  ns["rec"]	=	"http://purl.org/ontology/rec/core#";
  ns["cnt"]	=	"http://www.w3.org/2008/content#";
  ns["ldap"]	=	"http://purl.org/net/ldap/";
  ns["tripfs"]	=	"http://purl.org/tripfs/2010/02#";
  ns["meetup"]	=	"http://www.lotico.com/meetup/";
  ns["mf"]	=	"http://poshrdf.org/ns/mf#";
  ns["swanci"]	=	"http://purl.org/swan/1.2/citations/";
  ns["coin"]	=	"http://purl.org/court/def/2009/coin#";
  ns["xhtmlvocab"]	=	"http://www.w3.org/1999/xhtml/vocab/";
  ns["okkam"]	=	"http://models.okkam.org/ENS-core-vocabulary#";
  ns["timeline"]	=	"http://purl.org/NET/c4dm/timeline.owl#";
  ns["swivt"]	=	"http://semantic-mediawiki.org/swivt/1.0#";
  ns["opo"]	=	"http://online-presence.net/opo/ns#";
  ns["ref"]	=	"http://purl.org/vocab/relationship/";
  ns["oat"]	=	"http://openlinksw.com/schemas/oat/";
  ns["oo"]	=	"http://purl.org/openorg/";
  ns["rooms"]	=	"http://vocab.deri.ie/rooms#";
  ns["bib"]	=	"http://zeitkunst.org/bibtex/0.1/bibtex.owl#";
  ns["oc"]	=	"http://opencoinage.org/rdf/";
  ns["wgs"]	=	"http://www.w3.org/2003/01/geo/wgs84_pos#";
  ns["dbpp"]	=	"http://dbpedia.org/property/";
  ns["status"]	=	"http://ontologi.es/status#";
  ns["ezcontext"]	=	"http://ontologies.ezweb.morfeo-project.org/ezcontext/ns#";
  ns["sparql"]	=	"http://www.openrdf.org/config/repository/sparql#";
  ns["wgspos"]	=	"http://www.w3.org/2003/01/geo/wgs84_pos#";
  ns["pto"]	=	"http://www.productontology.org/id/";
  ns["pmlt"]	=	"http://inference-web.org/2.0/pml-trust.owl#";
  ns["cco"]	=	"http://purl.org/ontology/cco/core#";
  ns["wlp"]	=	"http://weblab-project.org/core/model/property/processing/";
  ns["swid"]	=	"http://semanticweb.org/id/";
  ns["txn"]	=	"http://lod.taxonconcept.org/ontology/txn.owl#";
  ns["ct"]	=	"http://data.linkedct.org/resource/linkedct/";
  ns["ufmedia"]	=	"http://purl.org/microformat/hmedia/";
  ns["evopat"]	=	"http://ns.aksw.org/Evolution/";
  ns["awol"]	=	"http://bblfish.net/work/atom-owl/2006-06-06/#";
  ns["prot"]	=	"http://www.proteinontology.info/po.owl#";
  ns["ist"]	=	"http://purl.org/ontology/is/types/";
  ns["sioca"]	=	"http://rdfs.org/sioc/actions#";
  ns["anca"]	=	"http://users.utcluj.ro/~raluca/rdf_ontologies_ralu/ralu_modified_ontology_pizzas2_0#";
  ns["aifb"]	=	"http://www.aifb.kit.edu/id/";
  ns["meteo"]	=	"http://purl.org/ns/meteo#";
  ns["pdo"]	=	"http://ontologies.smile.deri.ie/pdo#";
  ns["game"]	=	"http://data.totl.net/game/";
  ns["tarot"]	=	"http://data.totl.net/tarot/card/";
  ns["whois"]	=	"http://www.kanzaki.com/ns/whois#";
  ns["isq"]	=	"http://purl.org/ontology/is/quality/";
  ns["dayta"]	=	"http://dayta.me/resource#";
  ns["dnr"]	=	"http://www.dotnetrdf.org/configuration#";
  ns["sdmx"]	=	"http://purl.org/linked-data/sdmx#";
  ns["rulz"]	=	"http://purl.org/NET/rulz#";
  ns["isi"]	=	"http://purl.org/ontology/is/inst/";
  ns["copyright"]	=	"http://rhizomik.net/ontologies/2008/05/copyrightonto.owl#";
  ns["sawsdl"]	=	"http://www.w3.org/ns/sawsdl#";
  ns["xbrli"]	=	"http://www.xbrl.org/2003/instance#";
  ns["ean"]	=	"http://openean.kaufkauf.net/id/";
  ns["remus"]	=	"http://www.semanticweb.org/ontologies/2010/6/Ontology1279614123500.owl#";
  ns["yoda"]	=	"http://purl.org/NET/yoda#";
  ns["opus"]	=	"http://lsdis.cs.uga.edu/projects/semdis/opus#";
  ns["compass"]	=	"http://purl.org/net/compass#";
  ns["derecho"]	=	"http://purl.org/derecho#";
  ns["opmv"]	=	"http://purl.org/net/opmv/ns#";
  ns["cos"]	=	"http://www.inria.fr/acacia/corese#";
  ns["act"]	=	"http://www.w3.org/2007/rif-builtin-action#";
  ns["loticoowl"]	=	"http://www.lotico.com/ontology/";
  ns["lark1"]	=	"http://users.utcluj.ro/~raluca/ontology/Ontology1279614123500.owl#";
  ns["olo"]	=	"http://purl.org/ontology/olo/core#";
  ns["geoes"]	=	"http://geo.linkeddata.es/resource/";
  ns["posh"]	=	"http://poshrdf.org/ns/posh/";
  ns["is"]	=	"http://purl.org/ontology/is/core#";
  ns["gridworks"]	=	"http://purl.org/net/opmv/types/gridworks#";
  ns["eu"]	=	"http://eulersharp.sourceforge.net/2003/03swap/log-rules#";
  ns["search"]	=	"http://sindice.com/vocab/search#";
  ns["freebase"]	=	"http://rdf.freebase.com/ns/";
  ns["hcterms"]	=	"http://purl.org/uF/hCard/terms/";
  ns["gv"]	=	"http://rdf.data-vocabulary.org/#";
  ns["geospecies"]	=	"http://rdf.geospecies.org/ont/geospecies#";
  ns["conv"]	=	"http://purl.org/twc/vocab/conversion/";
  ns["nt"]	=	"http://ns.inria.fr/nicetag/2010/09/09/voc#";
  ns["r2r"]	=	"http://www4.wiwiss.fu-berlin.de/bizer/r2r/";
  ns["spacerel"]	=	"http://data.ordnancesurvey.co.uk/ontology/spatialrelations/";
  ns["ao"]	=	"http://purl.org/ontology/ao/core#";
  ns["tripfs2"]	=	"http://purl.org/tripfs/2010/06#";
  ns["dgfoaf"]	=	"http://west.uni-koblenz.de/ontologies/2010/07/dgfoaf.owl#";
  ns["tio"]	=	"http://purl.org/tio/ns#";
  ns["session"]	=	"http://redfoot.net/2005/session#";
  ns["protons"]	=	"http://proton.semanticweb.org/2005/04/protons#";
  ns["dblp"]	=	"http://www4.wiwiss.fu-berlin.de/dblp/terms.rdf#";
  ns["cito"]	=	"http://purl.org/net/cito/";
  ns["com"]	=	"http://purl.org/commerce#";
  ns["ma"]	=	"http://www.w3.org/ns/ma-ont#";
  ns["postcode"]	=	"http://data.ordnancesurvey.co.uk/id/postcodeunit/";
  ns["rail"]	=	"http://ontologi.es/rail/vocab#";
  ns["lib"]	=	"http://schemas.talis.com/2005/library/schema#";
  ns["countries"]	=	"http://eulersharp.sourceforge.net/2003/03swap/countries#";
  ns["events"]	=	"http://eulersharp.sourceforge.net/2003/03swap/event#";
  ns["toby"]	=	"http://tobyinkster.co.uk/#";
  ns["xtypes"]	=	"http://purl.org/xtypes/";
  ns["pbo"]	=	"http://purl.org/ontology/pbo/core#";
  ns["lp"]	=	"http://launchpad.net/rdf/launchpad#";
  ns["nsa"]	=	"http://multimedialab.elis.ugent.be/organon/ontologies/ninsuna#";
  ns["w3p"]	=	"http://prov4j.org/w3p/";
  ns["httph"]	=	"http://www.w3.org/2007/ont/httph#";
  ns["bookmark"]	=	"http://www.w3.org/2002/01/bookmark#";
  ns["wordnet"]	=	"http://purl.org/vocabularies/princeton/wordnet/schema#";
  ns["sindice"]	=	"http://vocab.sindice.net/";
  ns["rr"]	=	"http://www.w3.org/ns/r2rml#";
  ns["geodata"]	=	"http://sws.geonames.org/";
  ns["dul"]	=	"http://www.loa-cnr.it/ontologies/DUL.owl#";
  ns["units"]	=	"http://eulersharp.sourceforge.net/2003/03swap/unitsExtension#";
  ns["xfnv"]	=	"http://vocab.sindice.com/xfn#";
  ns["enc"]	=	"http://www.w3.org/2001/04/xmlenc#";
  ns["go"]	=	"http://www.geneontology.org/go#";
  ns["organiz"]	=	"http://eulersharp.sourceforge.net/2003/03swap/organization#";
  ns["humanbody"]	=	"http://eulersharp.sourceforge.net/2003/03swap/humanBody#";
  ns["phil"]	=	"http://philosurfical.open.ac.uk/ontology/philosurfical.owl/";
  ns["linkedct"]	=	"http://data.linkedct.org/resource/linkedct/";
  ns["drug"]	=	"http://www.agfa.com/w3c/2009/drugTherapy#";
  ns["webtlab"]	=	"http://webtlab.it.uc3m.es/";
  ns["provenir"]	=	"http://knoesis.wright.edu/provenir/provenir.owl#";
  ns["crm"]	=	"http://purl.org/NET/cidoc-crm/core#";
  ns["odp"]	=	"http://ontologydesignpatterns.org/";
  ns["openlinks"]	=	"http://www.openlinksw.com/schemas/virtrdf#";
  ns["esd"]	=	"http://def.esd.org.uk/";
  ns["elog"]	=	"http://eulersharp.sourceforge.net/2003/03swap/log-rules#";
  ns["human"]	=	"http://eulersharp.sourceforge.net/2003/03swap/human#";
  ns["languages"]	=	"http://eulersharp.sourceforge.net/2003/03swap/languages#";
  ns["linkedmdb"]	=	"http://data.linkedmdb.org/sparql/";
  ns["organism"]	=	"http://eulersharp.sourceforge.net/2003/03swap/organism#";
  ns["nndsr"]	=	"http://semanticdiet.com/schema/usda/nndsr/";
  ns["agents"]	=	"http://eulersharp.sourceforge.net/2003/03swap/agent#";
  ns["lvont"]	=	"http://lexvo.org/ontology#";
  ns["pgterms"]	=	"http://www.gutenberg.org/2009/pgterms/";
  ns["edm"]	=	"http://www.europeana.eu/schemas/edm/";
  ns["pobo"]	=	"http://purl.obolibrary.org/obo/";
  ns["dbprop"]	=	"http://dbpedia.org/property/";
  ns["nocal"]	=	"http://vocab.deri.ie/nocal#";
  ns["agent"]	=	"http://eulersharp.sourceforge.net/2003/03swap/agent#";
  ns["genab"]	=	"http://eulersharp.sourceforge.net/2003/03swap/genomeAbnormality#";
  ns["gn"]	=	"http://www.geonames.org/ontology#";
  ns["xro"]	=	"http://www.stalsoft.com/ontologies/xro/ns#";
  ns["bioskos"]	=	"http://eulersharp.sourceforge.net/2003/03swap/bioSKOSSchemes#";
  ns["prvr"]	=	"http://purl.org/ontology/prv/rules#";
  ns["healthcare"]	=	"http://www.agfa.com/w3c/2009/healthCare#";
  ns["xds"]	=	"http://www.w3.org/2001/XMLSchema#";
  ns["lgdo"]	=	"http://linkedgeodata.org/ontology/";
  ns["malignneo"]	=	"http://www.agfa.com/w3c/2009/malignantNeoplasm#";
  ns["ps"]	=	"http://purl.org/payswarm#";
  ns["pc"]	=	"http://purl.org/opendata-cz/public-contracts#";
  ns["muo"]	=	"http://purl.oclc.org/NET/muo/muo#";
  ns["care"]	=	"http://eulersharp.sourceforge.net/2003/03swap/care#";
  ns["opwn"]	=	"http://www.ontologyportal.org/WordNet.owl#";
  ns["ass"]	=	"http://uptheasset.org/ontology#";
  ns["room"]	=	"http://vocab.deri.ie/rooms#";
  ns["umbelrc"]	=	"http://umbel.org/umbel/rc/";
  ns["quak"]	=	"http://dev.w3.org/cvsweb/2000/quacken/vocab#";
  ns["cpm"]	=	"http://catalogus-professorum.org/cpm/";
  ns["xsl"]	=	"http://www.w3.org/1999/XSL/Transform#";
  ns["c4o"]	=	"http://purl.org/spar/c4o/";
  ns["vso"]	=	"http://purl.org/vso/ns#";
  ns["kb"]	=	"http://deductions.sf.net/ontology/knowledge_base.owl#";
  ns["zbwext"]	=	"http://zbw.eu/namespaces/zbw-extensions/";
  ns["req"]	=	"http://ns.softwiki.de/req/";
  ns["core"]	=	"http://vivoweb.org/ontology/core#";
  ns["cordis"]	=	"http://www4.wiwiss.fu-berlin.de/cordis/resource/cordis/";
  ns["wao"]	=	"http://webtlab.it.uc3m.es/2010/10/WebAppsOntology#";
  ns["conversion"]	=	"http://purl.org/twc/vocab/conversion/";
  ns["span"]	=	"http://www.ifomis.org/bfo/1.1/span#";
  ns["sport"]	=	"http://www.bbc.co.uk/ontologies/sport/";
  ns["ui"]	=	"http://www.w3.org/ns/ui#";
  ns["hemogram"]	=	"http://www.agfa.com/w3c/2009/hemogram#";
  ns["eg"]	=	"http://eulergui.sourceforge.net/engine.owl#";
  ns["oboro"]	=	"http://obofoundry.org/ro/ro.owl#";
  ns["quantities"]	=	"http://eulersharp.sourceforge.net/2003/03swap/quantitiesExtension#";
  ns["wai"]	=	"http://purl.org/wai#";
  ns["rnews"]	=	"http://iptc.org/std/rNews/2011-10-07#";
  ns["uni"]	=	"http://purl.org/weso/uni/uni.html#";
  ns["lod2"]	=	"http://lod2.eu/schema/";
  ns["pom"]	=	"http://maven.apache.org/POM/4.0.0#";
  ns["agetec"]	=	"http://www.agetec.org/";
  ns["transmed"]	=	"http://www.w3.org/2001/sw/hcls/ns/transmed/";
  ns["wf"]	=	"http://www.w3.org/2005/01/wf/flow#";
  ns["gd"]	=	"http://rdf.data-vocabulary.org/#";
  ns["hartigprov"]	=	"http://purl.org/net/provenance/ns#";
  ns["aair"]	=	"http://xmlns.notu.be/aair#";
  ns["clinproc"]	=	"http://www.agfa.com/w3c/2009/clinicalProcedure#";
  ns["commons"]	=	"http://commons.psi.enakting.org/def/";
  ns["admingeo"]	=	"http://data.ordnancesurvey.co.uk/ontology/admingeo/";
  ns["cube"]	=	"http://purl.org/linked-data/cube#";
  ns["fab"]	=	"http://purl.org/fab/ns#";
  ns["infection"]	=	"http://www.agfa.com/w3c/2009/infectiousDisorder#";
  ns["hospital"]	=	"http://www.agfa.com/w3c/2009/hospital#";
  ns["sig"]	=	"http://purl.org/signature#";
  ns["ccard"]	=	"http://purl.org/commerce/creditcard#";
  ns["tei"]	=	"http://www.tei-c.org/ns/1.0/";
  ns["payment"]	=	"http://reference.data.gov.uk/def/payment#";
  ns["voaf"]	=	"http://mondeca.com/foaf/voaf#";
  ns["sco"]	=	"http://purl.org/ontology/sco#";
  ns["disease"]	=	"http://www.agfa.com/w3c/2009/humanDisorder#";
  ns["ccom"]	=	"http://purl.org/ontology/cco/mappings#";
  ns["theatre"]	=	"http://purl.org/theatre#";
  ns["address"]	=	"http://schemas.talis.com/2005/address/schema#";
  ns["semtweet"]	=	"http://semantictweet.com/";
  ns["dgtwc"]	=	"http://data-gov.tw.rpi.edu/2009/data-gov-twc.rdf#";
  ns["prvtypes"]	=	"http://purl.org/net/provenance/types#";
  ns["scowt"]	=	"http://purl.org/weso/ontologies/scowt#";
  ns["clineva"]	=	"http://www.agfa.com/w3c/2009/clinicalEvaluation#";
  ns["eat"]	=	"http://www.awesomesauce.net/urmom/";
  ns["aneo"]	=	"http://akonadi-project.org/ontologies/aneo#";
  ns["ceo"]	=	"http://www.ebusiness-unibw.org/ontologies/consumerelectronics/v1#";
  ns["environ"]	=	"http://eulersharp.sourceforge.net/2003/03swap/environment#";
  ns["arch"]	=	"http://purl.org/archival/vocab/arch#";
  ns["hints2005"]	=	"http://purl.org/twc/cabig/model/HINTS2005-1.owl#";
  ns["spatial"]	=	"http://geovocab.org/spatial#";
  ns["p20"]	=	"http://zbw.eu/beta/p20/vocab/";
  ns["zem"]	=	"http://s.zemanta.com/ns#";
  ns["govwild"]	=	"http://govwild.org/ontology/GWOntology.owl#";
  ns["schema"]	=	"http://schema.org/";
  ns["obo"]	=	"http://purl.obolibrary.org/obo/";
  ns["coeus"]	=	"http://bioinformatics.ua.pt/coeus/";
  ns["pos"]	=	"http://www.w3.org/2003/01/geo/wgs84_pos#";
  ns["out"]	=	"http://ontologies.hypios.com/out#";
  ns["gelo"]	=	"http://krauthammerlab.med.yale.edu/ontologies/gelo#";
  ns["sio"]	=	"http://semanticscience.org/resource/";
  ns["skip"]	=	"http://skipforward.net/skipforward/resource/";
  ns["res"]	=	"http://www.w3.org/2005/sparql-results#";
  ns["uta"]	=	"http://uptheasset.org/ontology#";
  ns["vsto"]	=	"http://escience.rpi.edu/ontology/vsto/2/0/vsto.owl#";
  ns["prism"]	=	"http://prismstandard.org/namespaces/1.2/basic/";
  ns["ro"]	=	"http://purl.org/obo/owl/ro#";
  ns["soap"]	=	"http://www.w3.org/2003/05/soap-envelope/";
  ns["gml"]	=	"http://www.opengis.net/gml/";
  ns["eco"]	=	"http://www.ebusiness-unibw.org/ontologies/eclass/5.1.4/#";
  ns["dtype"]	=	"http://www.linkedmodel.org/schema/dtype#";
  ns["olia"]	=	"http://purl.org/olia/olia.owl#";
  ns["voag"]	=	"http://voag.linkedmodel.org/schema/voag#";
  ns["vaem"]	=	"http://www.linkedmodel.org/schema/vaem#";
  ns["rdfdf"]	=	"http://www.openlinksw.com/virtrdf-data-formats#";
  ns["httpvoc"]	=	"http://www.w3.org/2006/http#";
  ns["owls"]	=	"http://www.daml.org/services/owl-s/1.2/Service.owl#";
  ns["cpv"]	=	"http://purl.org/weso/cpv/";
  ns["rich"]	=	"http://rdf.data-vocabulary.org/";
  ns["bcnnorms"]	=	"http://datos.bcn.cl/ontologies/bcn-norms#";
  ns["campsite"]	=	"http://www.openlinksw.com/campsites/schema#";
  ns["vcard2006"]	=	"http://www.w3.org/2006/vcard/ns#";
  ns["sioctypes"]	=	"http://rdfs.org/sioc/types#";
  ns["ngeo"]	=	"http://geovocab.org/geometry#";
  ns["oper"]	=	"http://sweet.jpl.nasa.gov/2.0/mathOperation.owl#";
  ns["saxon"]	=	"http://saxon.sf.net/";
  ns["cmo"]	=	"http://purl.org/twc/ontologies/cmo.owl#";
  ns["rv"]	=	"http://wifo-ravensburg.de/semanticweb.rdf#";
  ns["oboso"]	=	"http://purl.org/obo/owl/SO#";
  ns["atomowl"]	=	"http://bblfish.net/work/atom-owl/2006-06-06/#";
  ns["gc"]	=	"http://www.oegov.org/core/owl/gc#";
  ns["skiresort"]	=	"http://www.openlinksw.com/ski_resorts/schema#";
  ns["telmap"]	=	"http://purl.org/telmap/";
  ns["vivo"]	=	"http://vivoweb.org/ontology/core#";
  ns["s3db"]	=	"http://www.s3db.org/core#";
  ns["steel"]	=	"http://ontorule-project.eu/resources/steel-30#";
  ns["iao"]	=	"http://purl.obolibrary.org/obo/iao.owl#";
  ns["ann"]	=	"http://www.w3.org/2000/10/annotation-ns#";
  ns["edam"]	=	"http://purl.bioontology.org/ontology/EDAM/";
  ns["vitro"]	=	"http://vitro.mannlib.cornell.edu/ns/vitro/public#";
  ns["fingal"]	=	"http://vocab.deri.ie/fingal#";
  ns["lgv"]	=	"http://linkedgeodata.org/ontology/";
  ns["mte"]	=	"http://nl.ijs.si/ME/owl/";
  ns["fct"]	=	"http://openlinksw.com/services/facets/1.0/";
  ns["hcard"]	=	"http://purl.org/uF/hCard/terms/";
  ns["shv"]	=	"http://ns.aksw.org/spatialHierarchy/";
  ns["mei"]	=	"http://www.music-encoding.org/ns/mei/";
  ns["nytimes"]	=	"http://data.nytimes.com/elements/";
  ns["prissma"]	=	"http://ns.inria.fr/prissma/v1#";
  ns["str"]	=	"http://nlp2rdf.lod2.eu/schema/string/";
  ns["greg"]	=	"http://kasei.us/about/foaf.xrdf#";
  ns["card"]	=	"http://www.ashutosh.com/test/";
  ns["wm"]	=	"http://ns.inria.fr/webmarks#";
  ns["kw"]	=	"http://kwantu.net/kw/";
  ns["iron"]	=	"http://purl.org/ontology/iron#";
  ns["biocore"]	=	"http://bio2rdf.org/core:";
  ns["lodac"]	=	"http://lod.ac/ns/lodac#";
  ns["qudt"]	=	"http://qudt.org/1.1/schema/qudt#";
  ns["rdo"]	=	"http://purl.org/rdo/ns#";
  ns["overheid"]	=	"http://standaarden.overheid.nl/owms/";
  ns["eui"]	=	"http://institutions.publicdata.eu/#";
  ns["w3con"]	=	"http://www.w3.org/2000/10/swap/pim/contact#";
  ns["re"]	=	"http://www.w3.org/2000/10/swap/reason#";
  ns["aapi"]	=	"http://rdf.alchemyapi.com/rdf/v1/s/aapi-schema#";
  ns["scsv"]	=	"http://purl.org/NET/schema-org-csv#";
  ns["ms"]	=	"http://purl.org/obo/owl/MS#";
  ns["aims"]	=	"http://aims.fao.org/aos/common/";
  ns["diseasome"]	=	"http://www4.wiwiss.fu-berlin.de/diseasome/resource/diseasome/";
  ns["coo"]	=	"http://purl.org/coo/ns#";
  ns["teach"]	=	"http://linkedscience.org/teach/ns#";
  ns["eye"]	=	"http://jena.hpl.hp.com/Eyeball#";
  ns["xt"]	=	"http://purl.org/twc/vocab/cross-topix#";
  ns["telix"]	=	"http://purl.org/telix#";
  ns["gesis"]	=	"http://lod.gesis.org/lodpilot/ALLBUS/vocab.rdf#";
  ns["dawgt"]	=	"http://www.w3.org/2001/sw/DataAccess/tests/test-dawg#";
  ns["mtecore"]	=	"http://purl.org/olia/mte/multext-east.owl#";
  ns["decl"]	=	"http://www.linkedmodel.org/1.0/schema/decl#";
  ns["tmpl"]	=	"http://purl.org/restdesc/http-template#";
  ns["prog"]	=	"http://purl.org/prog/";
  ns["gazetteer"]	=	"http://data.ordnancesurvey.co.uk/ontology/50kGazetteer/";
  ns["sso"]	=	"http://nlp2rdf.lod2.eu/schema/sso/";
  ns["ppo"]	=	"http://vocab.deri.ie/ppo#";
  ns["artstor"]	=	"http://simile.mit.edu/2003/10/ontologies/artstor#";
  ns["owlse"]	=	"http://www.daml.org/services/owl-s/1.2/generic/Expression.owl#";
  ns["cvbase"]	=	"http://purl.org/captsolo/resume-rdf/0.2/base#";
  ns["name"]	=	"http://example.org/name#";
  ns["rdb"]	=	"http://www.dbs.cs.uni-duesseldorf.de/RDF/relational#";
  ns["vcardx"]	=	"http://buzzword.org.uk/rdf/vcardx#";
  ns["s4ac"]	=	"http://ns.inria.fr/s4ac/v1#";
  ns["prov"]	=	"http://dvcs.w3.org/hg/prov/raw-file/tip/ontology/ProvenanceOntology.owl#";
  ns["biordf"]	=	"http://purl.org/net/biordfmicroarray/ns#";
  ns["rpubl"]	=	"http://rinfo.lagrummet.se/ns/2008/11/rinfo/publ#";
  ns["ogp"]	=	"http://ogp.me/ns#";
  ns["xch"]	=	"http://oanda2rdf.appspot.com/xch/";
  ns["visko"]	=	"http://trust.utep.edu/visko/ontology/visko-operator-v3.owl#";
  ns["vdpp"]	=	"http://data.lirmm.fr/ontologies/vdpp#";
  ns["psh"]	=	"http://psh.techlib.cz/skos/";
  ns["mygrid"]	=	"http://www.mygrid.org.uk/ontology#";
  ns["viskov"]	=	"http://trust.utep.edu/visko/ontology/visko-view-v3.owl#";
  ns["geovocab"]	=	"http://geovocab.org/";
  ns["water"]	=	"http://escience.rpi.edu/ontology/semanteco/2/0/water.owl#";
  ns["bcngeo"]	=	"http://datos.bcn.cl/ontologies/bcn-geographics#";
  ns["place"]	=	"http://purl.org/ontology/places/";
  ns["viskoo"]	=	"http://trust.utep.edu/visko/ontology/visko-operator-v3.owl#";
  ns["rdfdata"]	=	"http://rdf.data-vocabulary.org/rdf.xml#";
  ns["kontakt"]	=	"http://richard.cyganiak.de/";
  ns["b2rpubchem"]	=	"http://bio2rdf.org/ns/ns/ns/pubchem#";
  ns["fabio"]	=	"http://purl.org/spar/fabio#";
  ns["pns"]	=	"http://data.press.net/ontology/stuff/";
  ns["bcnbio"]	=	"http://datos.bcn.cl/ontologies/bcn-biographies#";
  ns["harrisons"]	=	"http://harrisons.cc/";
  ns["sec"]	=	"http://purl.org/security#";
  ns["chebi"]	=	"http://bio2rdf.org/chebi:";
  ns["granatum"]	=	"http://chem.deri.ie/granatum/";
  ns["pois"]	=	"http://purl.oclc.org/POIS/vcblr#";
  ns["frbrcore"]	=	"http://purl.org/vocab/frbr/core#";
  ns["govtrackus"]	=	"http://www.rdfabout.com/rdf/usgov/geo/us/";
  ns["madsrdf"]	=	"http://www.loc.gov/mads/rdf/v1#";
  ns["cdm"]	=	"http://purl.org/twc/ontology/cdm.owl#";
  ns["dbptmpl"]	=	"http://dbpedia.org/resource/Template:";
  ns["frir"]	=	"http://purl.org/twc/ontology/frir.owl#";
  ns["fc"]	=	"http://www.freeclass.eu/freeclass_v1#";
  
  return {
  	init: function(){
  	  impl = this;
  	},
  	uri2curie: function(u){
  	  for(var i in ns){
  	  	if(u.indexOf(ns[i]) == 0){
  	  	  newU = i+":"+u.replace(ns[i], "");
  	  	  return newU;
  	  	}
  	  }
  	  return u;
  	},
  	get: function(p){
  	  return ns[p];
  	}
  }
}
