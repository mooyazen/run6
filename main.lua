Users = {}

function IsInTable(table, value)
    for wsl in ipairs(table) do
        if wsl == value then
            return true
        end
    end
    return false
end

Handlers.add(
    'addUser',
    Handlers.utils.hasMatchingTag('Action', 'addUser'),
    function(msg)
        
            table.insert(Users, msg.Data);
        
    end
)

Handlers.add(
    'getUser',
    Handlers.utils.hasMatchingTag('Action', 'getUser'),
    function(msg)
        Handlers.utils.reply(table.concat(Users, "@"))(msg)
    end
)