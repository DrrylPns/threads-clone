import { fetchUser, fetchUsers } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { fetchCommunities } from '@/lib/actions/community.actions';
import SuggestedCard from '../cards/SuggestedCard';
import SuggestedUser from '../cards/SuggestedUser';

async function RightSidebar() {
    const user = await currentUser();
    if(!user) return null;

    const userInfo = await fetchUser(user.id);
    if(!userInfo?.onboarded) redirect('/onboarding');

    // Fetch communities
    const FCresult = await fetchCommunities({
        searchString: "",
        pageNumber: 1,
        pageSize: 25,
    });

    const FUresult = await fetchUsers({userId: user.id})


    return (
        <section className="custom-scrollbar rightsidebar">
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1 mb-4">
                    Suggested Communities
                </h3>
                {FCresult.communities.slice(0,4).map((community) => (
                            <SuggestedCard
                                key={community.id}
                                id={community.id}
                                name={community.name}
                                username={community.username}
                                imgUrl={community.image}
                            />
                        ))}
            </div>

            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">
                    Suggested Users
                </h3>
                {FUresult.users.map((users) => (
                        <SuggestedUser
                            key={users.id}
                            id={users.id}
                            name={users.name}
                            username={users.username}
                            imgUrl={users.image}
                        />
                    ))
                        
                    }
            </div>
        </section>
    )
}

export default RightSidebar