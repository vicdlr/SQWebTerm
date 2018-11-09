/***
NetTalk Mobile Database
***/
var database={
  name: "invoice",
  version:3,
  handle:{},
  open:0,
  error:"",
  errorcode:0,
  synchost: "http://127.0.0.1:88",
  synctimer: 600,   // seconds
  deviceid: "",
  user:"",
  password:"",
  token:"",
  status:0,
  syncDate:"",
  onSyncCommsSuccess:function(data){
  },
  onSyncCommsError:function(XMLHttpRequest, textStatus, errorThrown){
  },
  tables:[
    { name: "countries",
      syncproc: "synccountries",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'cou_timestampkey',unique: false, fields:["ts"]},
        {name:'cou_servertimestampkey',unique: false, fields:["sts"]},
        {name:'cou_countrycodekey',unique: true, fields:["countrycode"]},
        {name:'cou_countrykey',unique: false, fields:["country"]}
      ],
      relations: [
        {type:"onetomany",tableName:"linkcountriesshippers",links:{countrycode:"countryguid"}}
        ,{type:"onetomany",tableName:"customer",links:{guid:"countrycode"}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        countrycode:"",
        country:""
      },
      afterSync: function(){
      }
    },
    { name: "customer",
      syncproc: "synccustomer",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'cus_timestampkey',unique: false, fields:["ts"]},
        {name:'cus_servertimestampkey',unique: false, fields:["sts"]},
        {name:'cus_namekey',unique: false, fields:["lastname"]},
        {name:'cus_countrykey',unique: false, fields:["countrycode"]},
        {name:'cus_shipperkey',unique: false, fields:["shipperguid"]}
      ],
      relations: [
        {type:"manytoone",tableName:"shippers",links:{shipperguid:"guid"}}
        ,{type:"manytoone",tableName:"countries",links:{countrycode:"guid"}}
        ,{type:"onetomany",tableName:"invoice",links:{guid:"customerguid"}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        firstname:"",
        lastname:"",
        company:"",
        phone:"",
        email:"",
        countrycode:"",
        shipperguid:""
      },
      afterSync: function(){
      }
    },
    { name: "invoice",
      syncproc: "syncinvoice",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'inv_servertimestampkey',unique: false, fields:["sts"]},
        {name:'inv_timestampkey',unique: false, fields:["ts"]},
        {name:'inv_numberkey',unique: false, fields:["invoicenumber"]},
        {name:'inv_customerkey',unique: false, fields:["customerguid"]}
      ],
      relations: [
        {type:"manytoone",tableName:"customer",links:{customerguid:"guid"}}
        ,{type:"onetomany",tableName:"lineitems",links:{guid:"invoiceguid"}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        invoicenumber:0,
        customerguid:"",
        date:"",
        paid:0,
        terms:0
      },
      afterSync: function(){
      }
    },
    { name: "lineitems",
      syncproc: "synclineitems",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'lin_timestampkey',unique: false, fields:["ts"]},
        {name:'lin_servertimestampkey',unique: false, fields:["sts"]},
        {name:'lin_productkey',unique: false, fields:["productguid"]},
        {name:'lin_invoicekey',unique: false, fields:["invoiceguid"]}
      ],
      relations: [
        {type:"manytoone",tableName:"invoice",links:{invoiceguid:"guid"}}
        ,{type:"manytoone",tableName:"product",links:{productguid:"guid"}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        invoiceguid:"",
        productguid:"",
        price:0,
        quantity:0
      },
      afterSync: function(){
      }
    },
    { name: "linkcountriesshippers",
      syncproc: "synclinkcountriesshippers",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'lcs_timestampkey',unique: false, fields:["ts"]},
        {name:'lsc_servertimestampkey',unique: false, fields:["sts"]},
        {name:'lsc_countrykey',unique: true, fields:["countryguid","shipperguid"]},
        {name:'lcs_shipperkey',unique: false, fields:["shipperguid","countryguid"]}
      ],
      relations: [
        {type:"manytoone",tableName:"countries",links:{countryguid:"countrycode",shipperguid:""}}
        ,{type:"manytoone",tableName:"shippers",links:{shipperguid:"guid",countryguid:""}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        countryguid:"",
        shipperguid:""
      },
      afterSync: function(){
      }
    },
    { name: "product",
      syncproc: "syncproduct",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'pro_timestampkey',unique: false, fields:["ts"]},
        {name:'pro_servertimestampkey',unique: false, fields:["sts"]},
        {name:'pro_namekey',unique: false, fields:["name"]}
      ],
      relations: [
        {type:"onetomany",tableName:"lineitems",links:{guid:"productguid"}}
      ],
      record: {
        guid:"",
        ts:0,
        sts:0,
        dts:0,
        name:"",
        rrp:0
      },
      afterSync: function(){
      }
    },
    { name: "shippers",
      syncproc: "syncshippers",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'shi_shipperkey',unique: true, fields:["shipper"]},
        {name:'shi_servertimestampkey',unique: false, fields:["tst"]},
        {name:'shi_timestampkey',unique: false, fields:["ts"]}
      ],
      relations: [
        {type:"onetomany",tableName:"linkcountriesshippers",links:{guid:"shipperguid"}}
        ,{type:"onetomany",tableName:"customer",links:{guid:"shipperguid"}}
      ],
      record: {
        guid:"",
        ts:0,
        tst:0,
        dts:0,
        shipper:"",
        email:"",
        phone:""
      },
      afterSync: function(){
      }
    },
    { name: "thisdevice",
      syncproc: "syncthisdevice",
      objectStore:{},
      everythingafter:0,
      primarykeyfield: "guid",
      timestampfield: "ts",
      servertimestampfield: "sts",
      deletedtimestampfield: "dts",
      indexes: [
        {name:'tdh_timestampkey',unique: false, fields:["ts"]},
        {name:'thd_servertimestampkey',unique: false, fields:["sts"]}
      ],
      relations: [
      ],
      record: {
        guid:"",
        sts:0,
        ts:0,
        dts:0,
        clientdeviceid:"",
        phonenumber:"",
        password:"",
        salt:"",
        synchost:"",
        lastsyncdate:0
      },
      afterSync: function(){
          dbGet_thisdevice();
      }
    }
  ],
  countries:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[0],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[0],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[0]);}
  },
  customer:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[1],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[1],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[1]);}
  },
  invoice:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[2],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[2],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[2]);}
  },
  lineitems:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[3],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[3],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[3]);}
  },
  linkcountriesshippers:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[4],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[4],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[4]);}
  },
  product:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[5],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[5],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[5]);}
  },
  shippers:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[6],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[6],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[6]);}
  },
  thisdevice:{
    table: {},
    record: {},
    view:  function(){idbSelect({table:database.tables[7],orderBy:'ts',oncomplete:function(resultset){idbShowResult(database.tables[7],resultset)}})},
    empty: function(){idbEmpty(database,database.tables[7]);}
  },
  last:0
};
database.countries.table = database.tables[0];
database.countries.record = database.tables[0].record;
database.customer.table = database.tables[1];
database.customer.record = database.tables[1].record;
database.invoice.table = database.tables[2];
database.invoice.record = database.tables[2].record;
database.lineitems.table = database.tables[3];
database.lineitems.record = database.tables[3].record;
database.linkcountriesshippers.table = database.tables[4];
database.linkcountriesshippers.record = database.tables[4].record;
database.product.table = database.tables[5];
database.product.record = database.tables[5].record;
database.shippers.table = database.tables[6];
database.shippers.record = database.tables[6].record;
database.thisdevice.table = database.tables[7];
database.thisdevice.record = database.tables[7].record;
//------------------------
var syncTimer;
//------------------------
function syncDatabase(){
  idbSyncAll(database,0,function(){ // oncomplete - all tables have been sync'd
  }, function(XMLHttpRequest, textStatus, errorThrown){ // on error
  }
  )
}
//------------------------
function syncTimerOn(){
  if(database.synctimer){
    syncTimer = setInterval(syncDatabase,database.synctimer*1000); // sync database on a timer
  }
}
//------------------------
function syncTimerOff(){
  clearInterval(syncTimer);
}

//------------------------
function dbGet_thisdevice(){
  idbGet(database,database.thisdevice.table,'_first_',function(){
    // set database properties from settings.
    database.synchost = database.thisdevice.record.synchost;
    database.user = database.thisdevice.record.phonenumber;
    database.password = database.thisdevice.record.password;
    database.deviceid = database.thisdevice.record.clientdeviceid;
  })
}

//------------------------
$(document).ready(function() {
  setTimeout(syncDatabase,3*1000+100); // sync database soon after program starts
  syncTimerOn()
  // prime the first record in the settings table if it does not exist.
  database.thisdevice.record.guid = Math.random().toString(36).substr(3,8).toUpperCase() + Math.random().toString(36).substr(3,8).toUpperCase(); // 16 chars 0-9, A-Z
  database.thisdevice.record.sts=0; // 
  database.thisdevice.record.ts=0; // 
  database.thisdevice.record.dts=0; // 
  database.thisdevice.record.clientdeviceid = Math.random().toString(36).substr(3,8).toUpperCase() + Math.random().toString(36).substr(3,8).toUpperCase(); // 16 chars 0-9, A-Z
  database.thisdevice.record.phonenumber=""; // 
  database.thisdevice.record.password=""; // 
  database.thisdevice.record.salt=""; // 
  database.thisdevice.record.synchost = database.synchost;
  database.thisdevice.record.lastsyncdate=0; // 
  idbOne(database,database.thisdevice.table,function(){ // adds the above record, but only if the table is empty.
    dbGet_thisdevice();
  })
});
//------------------------

