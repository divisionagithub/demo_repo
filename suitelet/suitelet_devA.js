function startup(req,res)
{



if(req.getMethod()=== 'Get')
{


nlapiLogExecution('debug','Log added by developer 2');


}







}

function getRecords()
{
nlapiLogExecution('debug','Comment added by some other developer');
var rec=nlapiSearchRecord('invoice',null);



}
